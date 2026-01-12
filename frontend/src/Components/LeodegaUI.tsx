import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";

type ReservedRange = { start_date: string; end_date: string };


// calendario 
function toDateOnlyISO(d: Date) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isDateBetween(target: string, start: string, end: string) {
  return target >= start && target <= end;
}

export default function LeodegaUI() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState<any>(null);
  const [openReserve, setOpenReserve] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [reservedRanges, setReservedRanges] = useState<ReservedRange[]>([]);
  const [loadingRanges, setLoadingRanges] = useState(false);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    api
      .get(`/store-rooms/${id}/detail`)
      .then((res) => setData(res.data))
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    if (!openReserve || !id) return;

    setLoadingRanges(true);
    setError("");

    api
      .get(`/storeRooms/${id}/reserved-dates`)
      .then((res) => setReservedRanges(res.data || []))
      .catch(() => setReservedRanges([]))
      .finally(() => setLoadingRanges(false));
  }, [openReserve, id]);

  const priceMonthly = useMemo(() => {
    const p = Number(data?.prices?.[0]?.price ?? 0);
    return Number.isFinite(p) ? p : 0;
  }, [data]);

  const todayISO = useMemo(() => toDateOnlyISO(new Date()), []);

  const startDisabled = useMemo(() => {
    if (!startDate) return false;
    return reservedRanges.some((r) => isDateBetween(startDate, r.start_date, r.end_date));
  }, [startDate, reservedRanges]);

  const endDisabled = useMemo(() => {
    if (!endDate) return false;
    return reservedRanges.some((r) => isDateBetween(endDate, r.start_date, r.end_date));
  }, [endDate, reservedRanges]);

  const rangeHasOverlap = useMemo(() => {
    if (!startDate || !endDate) return false;
    return reservedRanges.some(
      (r) => startDate <= r.end_date && endDate >= r.start_date
    );
  }, [startDate, endDate, reservedRanges]);

  const sendReservation = async () => {
    if (!id) return;

    setError("");

    if (!startDate || !endDate) {
      setError("Selecciona fecha de inicio y fin.");
      return;
    }

    if (startDate < todayISO) {
      setError("La fecha de inicio no puede ser anterior a hoy.");
      return;
    }

    if (endDate < startDate) {
      setError("La fecha fin no puede ser menor a la fecha inicio.");
      return;
    }

    if (startDisabled || endDisabled || rangeHasOverlap) {
      setError("Ese rango se cruza con una reserva ya confirmada. Elige otras fechas.");
      return;
    }

    try {
      setSending(true);

      await api.post("/reservations", {
        store_room_id: Number(id),
        start_date: startDate,
        end_date: endDate,
        total_mount: priceMonthly,
      });

      setOpenReserve(false);
      setStartDate("");
      setEndDate("");

      alert("Solicitud enviada");
      // navigate a solicitudes no tenemos T.T

    } catch (e: any) {
      const status = e?.response?.status;

      if (status === 401) {
        setError("Debes iniciar sesión para reservar.");
      } else if (status === 409) {
        setError(e?.response?.data?.message || "Fechas no disponibles.");
      } else if (status === 422) {
        setError("Revisa las fechas ingresadas.");
      } else {
        setError("Ocurrió un error enviando la solicitud.");
      }
    } finally {
      setSending(false);
    }
  };

  if (!data) return <div>Cargando...</div>;

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 flex flex-col items-center">

      <div className="w-full max-w-7xl grid grid-cols-3 gap-6 mt-6 px-6">

        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-2" style={{ height: "256px" }}>
            <div className="col-span-2 overflow-hidden rounded-lg">
              <img src={data.photos?.[0]} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col space-y-2">
              {data.photos?.slice(1, 3).map((img: string, i: number) => (
                <div key={i} className="overflow-hidden rounded-lg" style={{ height: "calc(160px - 4px)" }}>
                  <img src={img} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="border rounded-xl p-6 h-fit shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
              {data.landlord.name.charAt(0) + data.landlord.name.charAt(1).toUpperCase()}
            </div>
            <h2 className="font-semibold mt-2">
              {data.landlord.name} {data.landlord.lastname}
            </h2>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full text-sm">
              Contactar Ahora
            </button>
            <button className="mt-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg w-full text-sm">
              Enviar Email a {data.landlord.email}
            </button>
            <div className="mt-4 text-xs text-gray-500 text-left w-full">
              <p>Horario de atención</p>
              <p>Lunes a Viernes: 08h00 - 17h00</p>
              <p>Disponibilidad</p>
              <p>Inmediata</p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full max-w-7xl px-6 mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 font-bold text-2xl">
                  ${data.prices?.[0]?.price}
                  <span className="text-sm font-normal text-gray-500"> USD mensual</span>
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {data.size} m² - {data.room_type}
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => navigate(`/reportIncident/${id}`)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm"
                >
                  Reportar
                </button>

                <button
                  onClick={() => setOpenReserve(true)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm"
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Descripción</h3>
            <p className="text-sm text-gray-600">{data.description}</p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Características</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              {[data.size + " m²", "Estacionamiento", "24/7", "Internet", "CCTV", "Muelle de carga"].map((item, i) => (
                <div key={i} className="border rounded-lg p-3 text-gray-700 bg-gray-50 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Imágenes Adicionales</h3>
            <div className="grid grid-cols-3 gap-4">
              {data.photos?.map((img: string, i: number) => (
                <img key={i} src={img} className="h-32 w-full object-cover rounded-lg" />
              ))}
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Especificaciones Técnicas</h3>
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <tr><td className="py-2">Dimensiones</td><td>20m x 15m</td></tr>
                <tr><td className="py-2">Altura</td><td>6 metros</td></tr>
                <tr><td className="py-2">Tipo de suelo</td><td>Concreto industrial</td></tr>
                <tr><td className="py-2">Piso</td><td>2 puertas industriales</td></tr>
                <tr><td className="py-2">Iluminación</td><td>LED industrial</td></tr>
                <tr><td className="py-2">Ventilación</td><td>Natural y forzada</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {openReserve && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Reservar (Solicitud)</h3>
              <button
                onClick={() => {
                  setOpenReserve(false);
                  setError("");
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Precio mensual: <span className="font-semibold">${priceMonthly}</span>
            </p>

            {loadingRanges ? (
              <p className="text-sm text-gray-500 mb-3">Cargando disponibilidad...</p>
            ) : (
              <p className="text-xs text-gray-500 mb-3">
                *Se bloquean fechas ya confirmadas.
              </p>
            )}

            <label className="text-sm">Fecha inicio</label>
            <input
              type="date"
              min={todayISO}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 mb-3 ${startDisabled ? "border-red-400" : ""}`}
            />

            <label className="text-sm">Fecha fin</label>
            <input
              type="date"
              min={startDate || todayISO}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 mb-3 ${endDisabled || rangeHasOverlap ? "border-red-400" : ""}`}
            />

            {rangeHasOverlap && (
              <p className="text-sm text-red-600 mb-2">
                Ese rango se cruza con fechas ya confirmadas.
              </p>
            )}

            {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setOpenReserve(false)}
                className="px-4 py-2 rounded-lg border"
                disabled={sending}
              >
                Cancelar
              </button>

              <button
                onClick={sendReservation}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white disabled:opacity-60"
                disabled={sending || loadingRanges}
              >
                {sending ? "Enviando..." : "Enviar solicitud"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

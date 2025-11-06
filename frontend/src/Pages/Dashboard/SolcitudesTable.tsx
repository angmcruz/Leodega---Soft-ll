import { Filter, RotateCcw } from "lucide-react";

const data = [
  {
    id: "00001",
    nombre: "Christine Brooks",
    direccion: "089 Kutch Green Apt. 448",
    fecha: "04 Sep 2019",
    tipo: "Solicitud Bodega",
    estado: "Completada",
  },
  {
    id: "00002",
    nombre: "Rosie Pearson",
    direccion: "979 Immanuel Ferry Suite 526",
    fecha: "28 May 2019",
    tipo: "Reporte Bodega",
    estado: "En proceso",
  },
  {
    id: "00003",
    nombre: "Darrell Caldwell",
    direccion: "8587 Frida Ports",
    fecha: "23 Nov 2019",
    tipo: "Solicitud Bodega",
    estado: "Rechazada",
  },
];

export default function SolicitudesTable() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Solicitudes</h1>

      {/* Filtros */}
      <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl mb-6">
        <div className="flex items-center gap-2 text-gray-700">
          <Filter size={16} />
          <span className="font-medium">Filtrar por</span>
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-600 focus:outline-none">
          <option>Fecha</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-600 focus:outline-none">
          <option>Tipo de Solic.</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-600 focus:outline-none">
          <option>Estado</option>
        </select>

        <button className="flex items-center gap-2 text-red-500 text-sm font-medium ml-auto hover:underline">
          <RotateCcw size={14} /> Reiniciar Filtro
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs border-b">
            <tr>
              <th className="py-3 px-5 font-semibold">ID</th>
              <th className="py-3 px-5 font-semibold">Nombre</th>
              <th className="py-3 px-5 font-semibold">Dirección</th>
              <th className="py-3 px-5 font-semibold">Fecha</th>
              <th className="py-3 px-5 font-semibold">Tipo</th>
              <th className="py-3 px-5 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="py-4 px-5">{row.id}</td>
                <td className="py-4 px-5">{row.nombre}</td>
                <td className="py-4 px-5">{row.direccion}</td>
                <td className="py-4 px-5">{row.fecha}</td>
                <td className="py-4 px-5">{row.tipo}</td>
                <td className="py-4 px-5">
                  <StatusBadge estado={row.estado} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ estado }: { estado: string }) {
  const colors: Record<string, string> = {
    Completada: "bg-emerald-100 text-emerald-700",
    "En proceso": "bg-purple-100 text-purple-700",
    Rechazada: "bg-red-100 text-red-700",
    "En espera": "bg-amber-100 text-amber-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        colors[estado] || "bg-gray-100 text-gray-600"
      }`}
    >
      {estado}
    </span>
  );
}

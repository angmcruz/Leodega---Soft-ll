import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

interface FlyToProps {
  position: [number, number];
}

function FlyToLocation({ position }: FlyToProps) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 15, { duration: 1.2 });
  }, [position, map]);
  return null;
}

const PreguntaInicio4: React.FC = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState<[number, number]>([-0.1807, -78.4678]); // Quito
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // 🔍 Buscar dirección con Nominatim
  const handleSearch = async (query: string) => {
    setSearch(query);
    if (query.length < 3) return setSuggestions([]);

    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=5&countrycodes=ec&q=${encodeURIComponent(
          query
        )}`
      );
      setSuggestions(res.data);
    } catch (err) {
      console.error("Error al buscar ubicación:", err);
    }
  };

  // 📍 Seleccionar dirección
  const handleSelect = (lat: string, lon: string, name: string) => {
    setPosition([parseFloat(lat), parseFloat(lon)]);
    setSearch(name);
    setSuggestions([]);
  };

  // 📍 Marcar clic manual en el mapa
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return <Marker position={position} icon={markerIcon} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER */}
      <header className="flex justify-end items-center gap-3 p-6">
        <img
          src="/src/img/LOGO_LEODEGA ISO.png"
          alt="Logo Leodega"
          className="h-10"
        />
        <img
          src="/src/img/LOGO_LEODEGA TEXTO-19.png"
          alt="Leodega"
          className="h-8"
        />
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex flex-col items-center flex-1 px-6 pb-10">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#1a1a1a]">
            ¿Dónde se encuentra tu espacio?
          </h1>
          <p className="text-gray-500 mb-10 text-sm sm:text-base">
            Solo compartiremos la dirección con usuarios que hayan realizado una
            reserva confirmada.
          </p>

          {/* 🔍 Campo de búsqueda */}
          <div className="relative w-full mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar dirección..."
              className="w-full p-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-400 transition-all"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-[1000] w-full bg-white border rounded-xl shadow-md max-h-60 overflow-auto mt-1">
                {suggestions.map((s) => (
                  <li
                    key={s.place_id}
                    onClick={() => handleSelect(s.lat, s.lon, s.display_name)}
                    className="px-4 py-2 hover:bg-purple-50 cursor-pointer text-sm text-gray-700 transition-colors"
                  >
                    {s.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 🗺️ Mapa interactivo */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-md mb-10 border border-gray-100">
            <MapContainer center={position} zoom={13} className="w-full h-full">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FlyToLocation position={position} />
              <LocationMarker />
            </MapContainer>
          </div>

          {/* 🔘 Indicador de progreso */}
          <div className="flex justify-center gap-2 my-10">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 3 ? "w-28 bg-purple-500" : "w-28 bg-gray-200"
                }`}
              ></div>
            ))}
          </div>

          {/* BOTONES */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/preguntainicio3")}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium px-8 py-3 shadow-md transition-all"
            >
              Atrás
            </button>
            <button
              onClick={() => navigate("/preguntainicio5")}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium px-8 py-3 shadow-md transition-all"
            >
              Siguiente
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreguntaInicio4;

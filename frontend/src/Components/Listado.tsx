import React from "react";
import { useLocation } from "react-router-dom";

const bodegasMock = [
  {
    id: 1,
    title: "Espacio de Bodega Amplio y Ventilado",
    location: "Quito, Ecuador",
    price: 35,
    size: "30m²",
    availability: "Disponible",
    image:
      "https://images.unsplash.com/photo-1581091870621-3a6b2782a142?q=80&w=1200",
  },
  {
    id: 2,
    title: "Bodega Pequeña pero Segura",
    location: "Guayaquil, Ecuador",
    price: 22,
    size: "12m²",
    availability: "Ocupado",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
];

export default function Listado() {
  const { state } = useLocation();

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      
      {/* Encabezado */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Alquiler de Bodegas
        </h1>

        <p className="text-gray-600">
          Resultados para:{" "}
          <span className="font-semibold text-purple-600">
            {state?.location || "Todas las ubicaciones"}
          </span>
        </p>

        {state && (
          <p className="text-gray-500 text-sm">
            Del{" "}
            <strong>{new Date(state.startDate).toLocaleDateString()}</strong> al{" "}
            <strong>{new Date(state.endDate).toLocaleDateString()}</strong>
          </p>
        )}
      </div>

      {/* Contenedor de lista + mapa */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lista */}
        <div className="col-span-2 flex flex-col gap-5">
          {bodegasMock.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl shadow-md p-4 flex gap-4 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={b.image}
                className="w-40 h-32 object-cover rounded-lg"
              />

              <div>
                <h2 className="text-xl font-semibold">{b.title}</h2>
                <p className="text-gray-600">{b.location}</p>
                <p className="text-purple-600 font-semibold text-lg mt-2">
                  ${b.price}/día
                </p>
                <p className="text-gray-500 text-sm">Tamaño: {b.size}</p>
                <span
                  className={`text-sm font-medium ${
                    b.availability === "Disponible"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {b.availability}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mapa (placeholder) */}
        <div className="w-full h-[400px] bg-gray-300 rounded-xl flex items-center justify-center">
          <span className="text-gray-700">Aquí irá el mapa</span>
        </div>
      </div>
    </div>
  );
}

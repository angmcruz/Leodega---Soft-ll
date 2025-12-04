import React from "react";

export default function LeodegaUI() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full h-16 flex items-center justify-between px-6 border-b bg-white">
        <div className="flex items-center space-x-2 font-semibold text-xl text-indigo-600">
          <span>leodega</span>
        </div>
        <input
          className="w-1/2 border rounded-full px-4 py-2 text-sm"
          placeholder="Search"
        />
        <div className="flex items-center space-x-4">
          <span>ES</span>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="text-sm">Melissa Cruz</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl grid grid-cols-3 gap-6 mt-6 px-6">
        {/* Left: Images */}
        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-2 h-64">
            <div className="col-span-2 h-full bg-gray-200 rounded-lg"></div>
            <div className="flex flex-col space-y-2">
              <div className="h-1/2 bg-gray-200 rounded-lg"></div>
              <div className="h-1/2 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="border rounded-xl p-6 h-fit shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
              EV
            </div>
            <h2 className="font-semibold mt-2">Eduardo Vallejo</h2>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full text-sm">Llamar Ahora</button>
            <button className="mt-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg w-full text-sm">Enviar Email</button>
            <div className="mt-4 text-xs text-gray-500 text-left w-full">
              <p>Horario de atención</p>
              <p>Lunes a Viernes: 08h00 - 17h00</p>
              <p>Disponibilidad</p>
              <p>Inmediata</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price and Description */}
      <div className="w-full max-w-7xl px-6 mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 font-bold text-2xl">$425 <span className="text-sm font-normal text-gray-500">USD mensual</span></p>
                <p className="text-gray-600 text-sm mt-1">300 m² • Altura 6 metros</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">Imprimir</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm">Reservar</button>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Descripción</h3>
            <p className="text-sm text-gray-600">Amplia bodega con excelente 24/7 buena seguridad excelente sector industrial, centro de la ciudad.</p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Características</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              {["300 m²", "Estacionamiento", "Seguridad 24/7", "Internet", "CCTV", "Muelle de carga"].map((item, i) => (
                <div key={i} className="border rounded-lg p-3 text-gray-700 bg-gray-50 text-center">{item}</div>
              ))}
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Imágenes Adicionales</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
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
    </div>
  );
}

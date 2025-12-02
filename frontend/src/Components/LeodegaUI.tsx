import React from "react";

export default function LeodegaUI() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 space-y-6">
      {/* Search + Header */}
      <header className="flex items-center justify-between bg-white p-4 rounded-2xl shadow">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-purple-600">leodega</div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-xl px-4 py-2 w-72"
          />
        </div>
        <div className="flex items-center gap-4">
          <span>Spanish</span>
          <div className="w-10 h-10 rounded-full bg-purple-300"></div>
        </div>
      </header>

      {/* Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* LEFT LIST */}
        <div className="col-span-1 space-y-4">
          {/* Card */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9dfcb3082a56"
              alt="bodega"
              className="rounded-xl w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-3">The People's Brownstone</h2>
            <p className="text-sm text-gray-500">1995 Broadway, New York</p>
            <div className="flex items-center justify-between mt-2">
              <div className="text-gray-700 font-medium">$3,000 / month</div>
              <button className="text-gray-400 hover:text-red-500">♡</button>
            </div>
          </div>

          {/* Another card mock */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9dfcb3082a56"
              alt="bodega"
              className="rounded-xl w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-3">Lovely room in Manhattan</h2>
            <p className="text-sm text-gray-500">246 Mott St, New York</p>
            <div className="flex items-center justify-between mt-2">
              <div className="text-gray-700 font-medium">$2,440 / month</div>
              <button className="text-gray-400 hover:text-red-500">♡</button>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="col-span-2 bg-white rounded-2xl shadow relative">
          <div className="w-full h-[600px] bg-gray-300 rounded-2xl flex items-center justify-center">
            <span className="text-gray-600">Map Placeholder</span>
          </div>
        </div>
      </div>

      {/* DETAIL SECTION */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="w-full h-32 bg-gray-300 rounded-xl"></div>
            ))}
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <span className="text-gray-600">Owner Info</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Descripción</h2>
          <p className="text-gray-600 mt-2">
            Amplia bodega con excelentes 24/7 buena seguridad sector industrial, cerca de la ciudad.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Características</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              "300 m²",
              "Estacionamiento",
              "Seguridad 24/7",
              "Internet",
              "CCTV",
              "Muelle de carga",
            ].map((c, i) => (
              <div
                key={i}
                className="bg-purple-50 border border-purple-200 text-purple-700 px-3 py-2 rounded-xl text-sm"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Especificaciones Técnicas</h2>
          <div className="space-y-2 text-gray-700">
            <p>Dimensiones: 20m x 15m</p>
            <p>Altura: 6m</p>
            <p>Tipo de Suelo: Concreto industrial</p>
            <p>Puertas: 2 puertas industriales</p>
            <p>Iluminación: LED industrial</p>
            <p>Ventilación: Natural y forzada</p>
          </div>
        </div>
      </section>
    </div>
  );
}

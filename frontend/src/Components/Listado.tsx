import React from "react";

export default function Listado() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 space-y-6">
      {/* HEADER */}
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

      {/* TITULO + FILTROS */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Bodegas en Guayaquil</h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-white shadow rounded-xl text-sm">Precio</button>
          <button className="px-3 py-1 bg-white shadow rounded-xl text-sm">Tamaño</button>
          <button className="px-3 py-1 bg-white shadow rounded-xl text-sm">Lugar</button>
          <button className="px-3 py-1 bg-white shadow rounded-xl text-sm">Más</button>
        </div>
      </div>

      {/* LAYOUT PRINCIPAL */}
      <div className="grid grid-cols-3 gap-6">
        {/* LISTA */}
        <div className="col-span-1 space-y-4">
          {/* CARD 1 */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9dfcb3082a56"
              alt="bodega"
              className="rounded-xl w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-3">The People's Brownstone</h2>
            <p className="text-xs text-gray-500">1995 Broadway, New York</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-700 font-medium">$3,000 / month</span>
              <button className="text-gray-400 hover:text-red-500">♡</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9dfcb3082a56"
              alt="bodega"
              className="rounded-xl w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-3">Lovely room in Manhattan</h2>
            <p className="text-xs text-gray-500">246 Mott St, New York</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-700 font-medium">$2,440 / month</span>
              <button className="text-gray-400 hover:text-red-500">♡</button>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="col-span-2 bg-white rounded-2xl shadow relative">
          <div className="w-full h-[600px] bg-gray-300 rounded-2xl flex items-center justify-center">
            <span className="text-gray-600">Map Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}

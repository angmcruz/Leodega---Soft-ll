import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PreguntaInicio6 = () => {
  const navigate = useNavigate();
  const [precio, setPrecio] = useState("");
  const [tamano, setTamano] = useState("");

  const precioBase = precio ? parseFloat(precio) : 0;
  const tarifaServicio = precioBase * 0.1; // 10% ejemplo
  const ganancia = precioBase - tarifaServicio;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
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

      {/* Contenido principal */}
      <main className="flex flex-col justify-center items-center flex-1 px-6">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            Configura un precio y tamaño de bodega
          </h1>
          <p className="text-gray-500 mb-10 text-sm sm:text-base">
            Consejo: $NN. Luego establecerás uno para cada fin de semana
          </p>

          {/* Inputs centrales */}
          <div className="flex justify-center items-center gap-6 mb-10">
            <div className="flex items-center text-4xl sm:text-5xl font-bold">
              <span className="mr-2">$</span>
              <input
                type="number"
                min="0"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="w-28 text-center border-b-2 border-gray-400 focus:border-purple-500 outline-none"
                placeholder="NN"
              />
            </div>

            <div className="flex items-center text-4xl sm:text-5xl font-bold">
              <input
                type="number"
                min="0"
                value={tamano}
                onChange={(e) => setTamano(e.target.value)}
                className="w-24 text-center border-b-2 border-gray-400 focus:border-purple-500 outline-none"
                placeholder="m²"
              />
              <span className="ml-2 text-2xl">m²</span>
            </div>
          </div>

          {/* Tabla */}
          <div className="border rounded-xl p-6 w-full sm:w-3/4 mx-auto text-left shadow-sm">
            <div className="flex justify-between py-1 text-lg">
              <span>Precio base</span>
              <span>${precioBase.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1 text-lg border-t border-gray-200">
              <span>Tarifa por servicio</span>
              <span>${tarifaServicio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1 text-lg border-t border-gray-200 font-semibold">
              <span>Ganas</span>
              <span>${ganancia.toFixed(2)}</span>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="flex justify-center gap-2 my-10">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 5 ? "w-28 bg-purple-500" : "w-28 bg-gray-200"
                }`}
              ></div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/PreguntaInicio5")}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium px-8 py-3 shadow-md transition-all"
            >
              Atrás
            </button>

            <button
              onClick={() => navigate("/PreguntaInicio7")}
              disabled={!precio || !tamano}
              className={`rounded-lg font-medium px-8 py-3 shadow-md transition-all ${
                precio && tamano
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Siguiente
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreguntaInicio6;

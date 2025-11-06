import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PreguntaInicio5 = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

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
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
            Da un título y descripción a tu bodega
          </h1>
          <p className="text-gray-500 mb-10 text-sm sm:text-base">
            Comparte lo que hace que tu espacio sea especial.
          </p>

          {/* Campos */}
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-2">
              Título
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Escribe un título para tu bodega"
              className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows={5}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Te divertirás mucho en este cómodo lugar para quedarte."
              className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            {/* Contador */}
            <p className="text-gray-400 text-right text-sm mt-1">
              {descripcion.length}/500
            </p>
          </div>

          {/* Barra de progreso */}
          <div className="flex justify-center gap-2 my-10">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 4 ? "w-28 bg-purple-500" : "w-28 bg-gray-200"
                }`}
              ></div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/PreguntaInicio4")}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium px-8 py-3 shadow-md transition-all"
            >
              Atrás
            </button>

            <button
              onClick={() => navigate("/PreguntaInicio6")}
              disabled={!titulo || !descripcion}
              className={`rounded-lg font-medium px-8 py-3 shadow-md transition-all ${
                titulo && descripcion
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

export default PreguntaInicio5;

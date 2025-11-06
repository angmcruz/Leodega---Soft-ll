import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PreguntaInicio7 = () => {
  const navigate = useNavigate();
  const [seguridad, setSeguridad] = useState({
    camara: false,
    ruido: false,
    control: false,
    objetos: false,
  });
  const [politica, setPolitica] = useState("");

  const handleCheckboxChange = (name) => {
    setSeguridad((prev) => ({ ...prev, [name]: !prev[name] }));
  };

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
        <div className="w-full max-w-2xl text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
            Comparte información de seguridad
          </h1>

          <h2 className="text-lg font-medium text-gray-800 mb-4">
            ¿Tu alojamiento tiene alguno de estos?
          </h2>

          <div className="space-y-3 mb-6">
            <label className="flex justify-between items-center border-b border-gray-100 py-2 text-gray-700">
              <span>Hay una cámara de seguridad exterior</span>
              <input
                type="checkbox"
                checked={seguridad.camara}
                onChange={() => handleCheckboxChange("camara")}
                className="w-5 h-5 accent-purple-500 cursor-pointer"
              />
            </label>

            <label className="flex justify-between items-center border-b border-gray-100 py-2 text-gray-700">
              <span>Monitor de decibeles de ruido presente</span>
              <input
                type="checkbox"
                checked={seguridad.ruido}
                onChange={() => handleCheckboxChange("ruido")}
                className="w-5 h-5 accent-purple-500 cursor-pointer"
              />
            </label>

            <label className="flex justify-between items-center border-b border-gray-100 py-2 text-gray-700">
              <span>Control de plagas y humedad</span>
              <input
                type="checkbox"
                checked={seguridad.control}
                onChange={() => handleCheckboxChange("control")}
                className="w-5 h-5 accent-purple-500 cursor-pointer"
              />
            </label>

            <label className="flex justify-between items-center border-b border-gray-100 py-2 text-gray-700">
              <span>
                Objetos prohibidos (sustancias peligrosas, inflamables, ilegales,
                perecibles, etc.)
              </span>
              <input
                type="checkbox"
                checked={seguridad.objetos}
                onChange={() => handleCheckboxChange("objetos")}
                className="w-5 h-5 accent-purple-500 cursor-pointer"
              />
            </label>
          </div>

          <h2 className="text-lg font-medium text-gray-800 mb-3 mt-6">
            Define políticas en caso de cancelación u algún problema
          </h2>

          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Política
            </label>
            <select
              value={politica}
              onChange={(e) => setPolitica(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Selecciona Política</option>
              <option value="flexible">Flexible</option>
              <option value="moderada">Moderada</option>
              <option value="estricta">Estricta</option>
            </select>
          </div>

          {/* Barra de progreso */}
          <div className="flex justify-center gap-2 my-10">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 6 ? "w-28 bg-purple-500" : "w-28 bg-gray-200"
                }`}
              ></div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/PreguntaInicio6")}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium px-8 py-3 shadow-md transition-all"
            >
              Atrás
            </button>

            <button
              onClick={() => navigate("/final")}
              disabled={!politica}
              className={`rounded-lg font-medium px-8 py-3 shadow-md transition-all ${
                politica
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreguntaInicio7;

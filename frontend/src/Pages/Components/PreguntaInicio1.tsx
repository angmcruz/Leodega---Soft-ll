import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PreguntaInicio1: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { id: "habitacion", name: "Habitación", image: "/src/img/habitacionLogo.png" },
    { id: "garaje", name: "Garaje/Parqueadero", image: "/src/img/garajeLogo.png" },
    { id: "contenedor", name: "Contenedor", image: "/src/img/contenedorLogo.png" },
    { id: "sotano", name: "Sótano", image: "/src/img/sotanoLogo.png" },
    { id: "atico", name: "Ático", image: "/src/img/aticoLogo.png" },
    { id: "bodega", name: "Bodega Indep.", image: "/src/img/bodegaLogo.png" },
  ];

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
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
            ¿Cuál de estas opciones describe mejor tu espacio?
          </h1>
          <p className="text-gray-500 mb-10 text-sm sm:text-base">
            Selecciona la propiedad que tienes. A continuación, indícanos la ubicación.
          </p>

          {/* Opciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-10">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 w-full max-w-[280px] h-[120px] flex items-center justify-center overflow-hidden
                  ${
                    selectedOption === option.id
                      ? "border-purple-500 shadow-lg scale-[1.03]"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute bottom-0 w-full text-center text-sm font-medium py-2 transition-colors ${
                    selectedOption === option.id
                      ? "bg-purple-500 text-white"
                      : "bg-gray-50 text-gray-700"
                  }`}
                >
                  {option.name}
                </div>
              </button>
            ))}
          </div>

          {/* Barra de progreso */}
          <div className="flex justify-center gap-2 my-10">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 0 ? "w-28 bg-purple-500" : "w-28 bg-gray-200"
                }`}
              ></div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium px-8 py-3 shadow-md transition-all"
            >
              Atrás
            </button>

            <button
              onClick={() => selectedOption && navigate("/preguntainicio2")}
              disabled={!selectedOption}
              className={`rounded-lg font-medium px-8 py-3 shadow-md transition-all ${
                selectedOption
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

export default PreguntaInicio1;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import FooterNav from "./FooterNav";

const PreguntaInicio7 = () => {
  const navigate = useNavigate();
  const [seguridad, setSeguridad] = useState<{
    camara: boolean;
    ruido: boolean;
    control: boolean;
    objetos: boolean;
  }>({
    camara: false,
    ruido: false,
    control: false,
    objetos: false,
  });
  const [politica, setPolitica] = useState("");

  type SeguridadKey = keyof typeof seguridad;

  const handleCheckboxChange = (name: SeguridadKey) => {
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
        <div className="w-full max-w-2xl text-left mt-[-90px] ">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
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
            <label htmlFor="politica" className="block text-sm font-medium text-gray-700 mb-1">
              Política
            </label>
            <select
              id="politica"
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

          <ProgressBar totalSteps={7} activeIndex={6} />

          <FooterNav
            onBack={() => navigate('/PreguntaInicio6')}
            onNext={() => navigate('/final')}
            nextDisabled={!politica}
            nextLabel={"Enviar Solicitud"}
          />
        </div>
      </main>
    </div>
  );
};

export default PreguntaInicio7;

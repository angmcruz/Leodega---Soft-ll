import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreguntaInicio3: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);

      // Crear vistas previas (solo visual, sin subir)
      const previews = files.map(file => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="pt-[30px] mb-[10px] px-[30px] lg:pt-[50px] lg:pb-10 lg:pr-[60px] lg:mb-[2px]">
        <div className="flex items-center gap-3 justify-end">
          <img src="/src/img/LOGO_LEODEGA ISO.png" alt="Logo Leodega" className="h-8 md:h-10 lg:h-12" />
          <img src="/src/img/LOGO_LEODEGA TEXTO-19.png" alt="Leodega" className="h-6 md:h-8 lg:h-10" />
        </div>
      </header>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 py-6 lg:py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-[22px] md:text-[28px] font-semibold text-center text-[#1a1a1a] mb-5">
            Agrega algunas fotos de tu bodega
          </h1>
          <p className="text-center text-[#6b7280] mb-8 text-[15px]">
            Para empezar, necesitarás cinco fotos. Después podrás agregar más o hacer cambios.
          </p>

          {/* Imagen de ejemplo / botón */}
          <div className="mb-8 sm:mb-10 lg:mb-12 flex justify-center">
            <img
              src="/src/img/agregarFotos.png"
              alt="Agregar Fotos"
              onClick={handleImageClick}
              className="w-full max-w-3xl h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Input oculto */}
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Mostrar vistas previas */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {imagePreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Vista previa ${index}`}
                  className="rounded-lg shadow object-cover w-full h-40"
                />
              ))}
            </div>
          )}

          {/* Botones */}
          <div className="flex justify-between items-center gap-3 sm:gap-4 px-2">
            <button
              onClick={() => navigate('/PreguntaInicio2')}
              className="bg-[#8b5cf6] text-white rounded-lg font-medium text-[15px] hover:bg-[#7c4ee0] transition-all duration-200 shadow-md hover:shadow-lg w-[160px] py-3"
            >
              Atrás
            </button>

            <button
              onClick={() => navigate('/preguntainicio4')}
              disabled={imagePreviews.length < 5}
              className={`rounded-lg font-medium text-[15px] transition-all duration-200 w-[160px] py-3 ${
                imagePreviews.length >= 5
                  ? 'bg-[#8b5cf6] text-white hover:bg-[#7c4ee0] shadow-md hover:shadow-lg'
                  : 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
              }`}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntaInicio3;

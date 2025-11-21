import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import FooterNav from './FooterNav';
import leodegalogo from '../img/LOGO_LEODEGAISO.png';
import agregarFotos from '../img/agregarFotos.png';
const PreguntaInicio3: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...previews]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="pt-[30px] mb-[10px] px-[30px] lg:pt-[50px] lg:pb-10 lg:pr-[60px] lg:mb-[2px]">
        <div className="flex items-center gap-3 justify-end">
          <img src={leodegalogo} alt="Logo Leodega" className="h-8 md:h-10 lg:h-12" />
          <img src= '/LOGO_LEODEGA TEXTO-19.png' alt="Leodega" className="h-6 md:h-8 lg:h-10" />
        </div>
      </header>
      <div className="flex-1 mt-[-100px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 py-6 lg:py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-[22px] md:text-[28px] font-semibold text-center text-[#1a1a1a] ">
            Agrega algunas fotos de tu bodega
          </h1>
          <p className="text-center text-[#6b7280] mb-8 text-[15px]">
            Para empezar, necesitarás cinco fotos. Después podrás agregar más o hacer cambios.
          </p>

          <div className="mb-8 sm:mb-10 lg:mb-12 flex justify-center">
            {imagePreviews.length === 0 ? (
              <button
                type="button"
                onClick={handleImageClick}
                aria-label="Agregar fotos"
                className="w-full max-w-3xl h-auto cursor-pointer rounded-md overflow-hidden"
              >
                <img
                  src={agregarFotos}
                  alt="Agregar Fotos"
                  className="w-full h-auto object-contain hover:opacity-80 transition-opacity"
                />
              </button>
            ) : (
              <div className="relative w-full max-w-3xl">
                <img
                  src={imagePreviews[0]}
                  alt="Principal subida"
                  className="w-full h-auto object-contain rounded-md"
                />
                <button
                  type="button"
                  onClick={handleImageClick}
                  aria-label="Agregar más fotos"
                  className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-md"
                >
                  +
                </button>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          {imagePreviews.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {imagePreviews.slice(1).map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Vista previa ${index + 1}`}
                  className="rounded-lg shadow object-cover w-full h-40"
                />
              ))}
            </div>
          )}

          <ProgressBar totalSteps={7} activeIndex={2} />

          <FooterNav
            onBack={() => navigate('/PreguntaInicio2')}
            onNext={() => navigate('/preguntainicio4')}
            nextDisabled={imagePreviews.length < 1}
          />
        </div>
      </div>
    </div>
  );
};

export default PreguntaInicio3;

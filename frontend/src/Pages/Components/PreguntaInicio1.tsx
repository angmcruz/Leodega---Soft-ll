import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreguntaInicio1: React.FC = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState<string>('');

    const options = [
        { id: 'habitacion', name: 'Habitación', image: '/src/img/habitacionLogo.png' },
        { id: 'garaje', name: 'Garaje/Parqueadero', image: '/src/img/garajeLogo.png' },
        { id: 'contenedor', name: 'Contenedor', image: '/src/img/contenedorLogo.png' },
        { id: 'sotano', name: 'Sótano', image: '/src/img/sotanoLogo.png' },
        { id: 'atico', name: 'Ático', image: '/src/img/aticoLogo.png' },
        { id: 'bodega', name: 'Bodega Indep.', image: '/src/img/bodegaLogo.png' },
    ];

    const handleOptionClick = (id: string) => {
        setSelectedOption(id);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="pt-[30px] mb-[10px] px-[30px] lg:pt-[50px] lg:pb-10 lg:pr-[60px] lg:mb-[2px]">
                <div className="flex items-center gap-3 justify-end">
                    <img src="/src/img/LOGO_LEODEGA ISO.png" alt="Logo Leodega" className="h-8 md:h-10 lg:h-12" />
                    <img src="/src/img/LOGO_LEODEGA TEXTO-19.png" alt="Leodega" className="h-6 md:h-8 lg:h-10" />
                </div>
            </header>
            
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 py-6 lg:py-8">
                <div className="w-full max-w-5xl">
                    <h1 className="text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] font-semibold text-center text-[#1a1a1a] mb-5 sm:mb-6 lg:mb-7 leading-tight lg:mt-[-70px]">
                        ¿Cuál de estas opciones describe mejor tu espacio?
                    </h1>
                    <p className="text-center text-[#6b7280] mb-8 sm:mb-10 lg:mb-12 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal px-4">
                        Selecciona la propiedad que tienes. A continuación, indícanos la ubicación
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 justify-items-center">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option.id)}
                                className={`bg-white rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-300 border-2 w-full max-w-[280px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[100px] sm:h-[110px] lg:h-[120px] overflow-hidden ${
                                    selectedOption === option.id
                                        ? 'border-[#8b5cf6] shadow-xl scale-[1.02]'
                                        : 'border-[#e5e7eb] hover:border-[#d1d5db] hover:shadow-lg'
                                }`}
                            >
                                <img 
                                    src={option.image} 
                                    alt={option.name} 
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                    
                    <div className="mb-8 sm:mb-10">
                        <div className="flex gap-1 sm:gap-1.5 lg:gap-2 justify-center px-2">
                            {[...Array(8)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-[6px] sm:h-[8px] lg:h-[10px] rounded-full transition-all duration-300 flex-shrink-0 ${
                                        index === 0 ? 'w-[32px] sm:w-[80px] lg:w-[120px] bg-[#8b5cf6]' : 'w-[32px] sm:w-[80px] lg:w-[120px] bg-[#e5e7eb]'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-3 sm:gap-4 px-2 w-full">
                        <button className="bg-[#8b5cf6] text-white rounded-lg sm:rounded-xl font-medium text-[14px] sm:text-[15px] lg:text-[17px] hover:bg-[#7c4ee0] transition-all duration-200 shadow-md hover:shadow-lg w-[140px] sm:w-[160px] lg:w-[180px] py-3 sm:py-3.5">
                            Atrás
                        </button>
                        <button 
                            onClick={() => selectedOption && navigate('/preguntainicio2')}
                            className={`rounded-lg sm:rounded-xl font-medium text-[14px] sm:text-[15px] lg:text-[17px] transition-all duration-200 w-[140px] sm:w-[160px] lg:w-[180px] py-3 sm:py-3.5 ${
                                selectedOption 
                                    ? 'bg-[#8b5cf6] text-white hover:bg-[#7c4ee0] shadow-md hover:shadow-lg' 
                                    : 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
                            }`}
                            disabled={!selectedOption}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreguntaInicio1;
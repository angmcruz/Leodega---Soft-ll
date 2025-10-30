import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Lock, Users } from 'lucide-react';

const PreguntaInicio2: React.FC = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState<string>('');

    const options = [
        { 
            id: 'completa', 
            title: 'Una bodega Completa',
            description: 'El arrendatario dispondrá de la bodega entera para su uso exclusivo.',
            icon: Building2
        },
        { 
            id: 'privado', 
            title: 'Un espacio privado',
            description: 'El arrendatario tendrá su propio espacio delimitado dentro de una propiedad, acceso controlado.',
            icon: Lock
        },
        { 
            id: 'compartido', 
            title: 'Un espacio compartido',
            description: 'El arrendatario guardará sus pertenencias en un área compartida con otros, dentro de un espacio supervisado.',
            icon: Users
        },
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
                        ¿Qué tipo de almacenamiento deseas?
                    </h1>
                    <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 lg:mb-12">
                        {options.map((option) => {
                            const IconComponent = option.icon;
                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionClick(option.id)}
                                    className={`w-full bg-white rounded-xl lg:rounded-2xl p-5 sm:p-6 flex items-start gap-4 sm:gap-5 transition-all duration-300 border-2 text-left ${
                                        selectedOption === option.id
                                            ? 'border-[#8b5cf6] shadow-xl'
                                            : 'border-[#e5e7eb] hover:border-[#d1d5db] hover:shadow-lg'
                                    }`}
                                >
                                    <div className="flex-1">
                                        <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#1a1a1a] mb-2">
                                            {option.title}
                                        </h3>
                                        <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6b7280] leading-relaxed">
                                            {option.description}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <IconComponent 
                                            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-gray-700"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    
                    
                    <div className="mb-8 sm:mb-10">
                        <div className="flex gap-1 sm:gap-1.5 lg:gap-2 justify-center px-2">
                            {[...Array(8)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-[6px] sm:h-[8px] lg:h-[10px] rounded-full transition-all duration-300 flex-shrink-0 ${
                                        index === 1 ? 'w-[32px] sm:w-[80px] lg:w-[120px] bg-[#8b5cf6]' : 'w-[32px] sm:w-[80px] lg:w-[120px] bg-[#e5e7eb]'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-3 sm:gap-4 px-2">
                        <button className="bg-[#8b5cf6] text-white rounded-lg sm:rounded-xl font-medium text-[14px] sm:text-[15px] lg:text-[17px] hover:bg-[#7c4ee0] transition-all duration-200 shadow-md hover:shadow-lg w-[140px] sm:w-[160px] lg:w-[180px] py-3 sm:py-3.5">
                            Atrás
                        </button>
                        <button 
                            onClick={() => selectedOption && navigate('/preguntainicio3')}
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

export default PreguntaInicio2;
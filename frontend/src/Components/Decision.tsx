
const Decision = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="pt-[40px] mb-[10px] pl-[30px] lg:pt-[80px] lg:pl-[60px] lg:mb-[2px]"><div className="flex items-center gap-3">
                <img src="/src/img/LOGO_LEODEGA ISO.png" alt="Logo Leodega" className=" h-10 md:h-12" />
                <img src="/src/img/LOGO_LEODEGA TEXTO-19.png" alt="Leodega" className=" h-8 md:h-10" />
            </div>
            </header>

            <div className="flex-1 flex flex-col lg:flex-col items-center justify-center px-[30px] pb-12 mb-[30px] lg:px-[60px] lg:pb-24 lg:mb-[60px] gap-12 lg:gap-20">
                <h2 className="md:text-[35px] text-[28px] text-[#313131] font-semibold text-center lg:text-left">
                    ¿Cuál es su rol en la plataforma?
                </h2>
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-stretch w-full max-w-4xl">    <div className="flex flex-col lg:flex-row items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-200 p-6 rounded-xl hover:bg-gray-50">
                        <div className="bg-gray-100 rounded-lg p-4 lg:p-6 flex items-center justify-center h-32 w-32 lg:h-40 lg:w-40">
                            <img 
                                src="/src/img/arrendador.png" 
                                alt="Arrendador" 
                                className="max-h-20 lg:max-h-24 object-contain"
                            />
                        </div>
                        <span className="text-[#313131] font-medium text-[25px] lg:mt-0">Arrendador</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-200 p-6 rounded-xl hover:bg-gray-50">
                        <div className="bg-gray-100 rounded-lg p-4 lg:p-6 flex items-center justify-center h-32 w-32 lg:h-40 lg:w-40">
                            <img 
                                src="/src/img/arrendatario.png" 
                                alt="Arrendatario" 
                                className="max-h-20 lg:max-h-24 object-contain"
                            />
                        </div>
                        <span className="text-[#313131] font-medium text-[25px] lg:mt-0">Arrendatario</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Decision;
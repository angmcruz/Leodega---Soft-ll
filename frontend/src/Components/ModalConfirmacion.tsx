export interface ModalConfirmacionProps {
    isOpen: boolean;
    onClose: () => void;
    titulo?: string;
    mensaje: string;
    textoBoton?: string;
    onConfirm?: () => void;
}

import React from 'react';
const ModalConfirmacion: React.FC<ModalConfirmacionProps> = ({
    isOpen,
    onClose,
    titulo = "Confirmación",
    mensaje,
    textoBoton = "Aceptar",
    onConfirm
    }) => {
    if (!isOpen) return null;

    const handleConfirm = () => {
        if (onConfirm) {
        onConfirm();
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-10"  onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100" onClick={(e) => e.stopPropagation()} >
                <div className="flex flex-col items-center pt-6 px-6">
                <div className="flex items-center justify-center w-[80px] h-[80px] bg-blue-100 rounded-full mb-4">
                    <img 
                    src="/src/img/info.png" 
                    alt="Información" 
                    className="w-[80px] h-[80px]"
                    />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                    {titulo}
                </h2>
                </div>

                <div className="px-6 py-4">
                <p className="text-gray-600 text-center leading-relaxed">
                    {mensaje}
                </p>
                </div>

                <div className="px-6 pb-6 pt-2">
                <button 
                    className="w-full bg-[#a855f7] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a855f7] "
                    onClick={handleConfirm}
                    autoFocus
                >
                    {textoBoton}
                </button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmacion;
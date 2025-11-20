import React from 'react';
import { X, CheckCircle, MapPin, Calendar, Building } from 'lucide-react';
import bodega1 from '../img/Bodega1.jpg';
interface BodegaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BodegaModal: React.FC<BodegaModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <button onClick={onClose} className="ml-auto text-gray-400 hover:text-gray-600 transition-colors flex mb-4">
                            <X size={24} />
                        </button>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-600 mt-1" size={24} />
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        Estado de la Reserva
                                    </h2>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-700 font-medium mb-1">
                                                Solicitud Aceptada
                                            </p>
                                            <p className="text-green-600 text-sm">
                                                Aceptada el 2024-08-11 14:30
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-600 mb-1">Próximo paso:</p>
                                            <p className="font-semibold text-gray-900">Generar contrato</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="p-2 rounded">
                                    <Building size= {23} className='mt-[-5px] '></Building>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Detalles de la Bodega
                                </h3>
                            </div>

                            <div className="flex gap-4">
                                <img src={bodega1} alt="Bodega"className="w-24 h-24 rounded-lg object-cover"/>

                                <div className="flex-1">
                                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                                        Bodega Industrial Norte
                                    </h4>
                                    <div className="flex items-start gap-2 text-gray-600 mb-2">
                                        <MapPin size={16} className="mt-1 flex-shrink-0" />
                                        <span className="text-sm">Av. Industrial 1234, Zona Norte, Ciudad</span>
                                    </div>
                                    <div className="flex gap-4 text-sm text-gray-700">
                                        <span className="font-medium">1,200 m²</span>
                                        <span>8 metros</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5">
                            <div className="flex items-start gap-3 mb-4">
                                <Calendar className="text-gray-700 mt-1" size={24} />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Detalles de la Reserva
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                            <p className="text-sm text-gray-600 mb-1">Fecha de Inicio</p>
                                            <p className="font-semibold text-gray-900">2024-09-01</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Fecha de Fin</p>
                                            <p className="font-semibold text-gray-900">2025-02-28</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Duración</p>
                                            <p className="font-semibold text-gray-900">6 meses</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Precio Mensual</p>
                                            <p className="font-semibold text-green-600 text-lg">$25,000 MXN</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Depósito</p>
                                            <p className="font-semibold text-gray-900">$50,000 MXN</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Valor Total</p>
                                            <p className="font-bold text-purple-600 text-xl">$200,000 MXN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                                    Cerrar
                                </button>
                                <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
                                    Generar Contrato
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BodegaModal;
import React from 'react';
import { CheckCircle, Mail, Home, Bell } from 'lucide-react';

interface SolicitudRechazadaProps {
    solicitud: {
        id: number;
        nombre: string;
    };
    razonRechazo: string;
    onVolverDashboard: () => void;
}

const SolicitudRechazada: React.FC<SolicitudRechazadaProps> = ({ 
    solicitud, 
    razonRechazo,
    onVolverDashboard 
}) => {
    const fechaActual = new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    
    const horaActual = new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    return (
        <div className='min-h-screen bg-gray-50 p-6'>
            <div className='bg-white min-h-screen p-8'>
                <div className="bg-white p-4 pt-6 px-8 rounded-xl min-h-screen">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-red-100 rounded-full p-3">
                                        <CheckCircle className="w-12 h-12 text-red-600" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-red-800 mb-2">
                                    Reserva Rechazada Exitosamente
                                </h2>
                                <p className="text-red-700">
                                    La notificación de rechazo ha sido enviada al cliente
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Mail className="w-5 h-5 text-gray-600" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Detalles de la Notificación
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm font-semibold text-gray-500">RESERVA ID:</span>
                                        <span className="text-sm text-gray-900 font-medium border px-3 rounded-xl">LEO-2024-001</span>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <span className="text-sm font-semibold text-gray-500">CLIENTE:</span>
                                        <span className="text-sm text-gray-900 font-medium">{solicitud.nombre}</span>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <span className="text-sm font-semibold text-gray-500">NOTIFICACIÓN ENVIADA:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-600 text-sm">✓ Email + SMS</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <span className="text-sm font-semibold text-gray-500">FECHA DE ENVÍO:</span>
                                        <span className="text-sm text-gray-900 font-medium">
                                            {fechaActual}, {horaActual}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    ¿Qué sucede ahora?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 text-2xl mt-[-5px]">•</span>
                                        <span className="text-sm text-gray-700">
                                            El cliente ha recibido tu mensaje de rechazo por email y SMS
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 text-2xl mt-[-5px]">•</span>
                                        <span className="text-sm text-gray-700">
                                            La bodega vuelve a estar disponible para nuevas reservas
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 text-2xl mt-[-5px]">•</span>
                                        <span className="text-sm text-gray-700">
                                            Esta acción no afecta tu calificación como propietario
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 text-2xl mt-[-5px]">•</span>
                                        <span className="text-sm text-gray-700">
                                            El cliente puede hacer una nueva solicitud en el futuro
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <button onClick={onVolverDashboard}
                                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2">
                                    <Home size={20} />
                                    Ir al Dashboard
                                </button>
                                <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
                                    <Bell size={20} />
                                    Ver Otras Notificaciones
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolicitudRechazada;
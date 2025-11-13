
/* eslint-disable sonarjs/cognitive-complexity */
import React, { useState } from 'react';
import { Check, X, AlertTriangle, MessageSquare } from 'lucide-react';
import type { Solicitud } from './Interfaces/SolicitudesData';


interface SolicitudRevisarResponderProps {
    solicitud: Solicitud;
    onVolver: () => void;
    onRevisarDetalles: () => void;
    onRechazar: (razon: string) => void;
}

const SolicitudRevisarResponder: React.FC<SolicitudRevisarResponderProps> = ({ 
    solicitud, 
    onVolver, 
    onRevisarDetalles,
    onRechazar 
}) =>  {
    const [mostrarConfirmarAceptar, setMostrarConfirmarAceptar] = useState(false);
    const [razonRechazo, setRazonRechazo] = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState<'aceptar' | 'rechazar' | null>(null);

    const datosCompletos = {
        nombre: solicitud.nombre,
        periodo: '3 meses',
        fechaInicio: '15 Ago',
        fechaFin: '15 Nov 2024',
        valorTotal: '$10,000,000',
        idSolicitud: 'LEO-2024-001'
    };

    const handleConfirmarAceptar = () => {
        console.log('Reserva aceptada');
        setMostrarConfirmarAceptar(false);
        onVolver();
    };

    const handleConfirmarRechazo = () => {
        if (razonRechazo.trim()) {
            console.log('Reserva rechazada:', razonRechazo);
            onRechazar(razonRechazo);
        }
    };

    const handleSeleccionarAceptar = () => {
        setOpcionSeleccionada('aceptar');
        setRazonRechazo('');
    };

    const handleSeleccionarRechazar = () => {
        setOpcionSeleccionada('rechazar');
    };

    return (
        <div className="w-full bg-gray-50 p-6">
            <div className="w-full mx-auto bg-white p-8 rounded-xl">
                <div className="mb-6 flex flex-row items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Decidir sobre Solicitud</h1>
                    <div className="text-sm text-gray-600 border rounded-xl px-3 py-1 bg-white ml-4">
                        <span className="font-semibold">ID:</span> {datosCompletos.idSolicitud}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumen de la Solicitud</h2>
                    
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 mb-1">CLIENTE</p>
                            <p className="text-base font-bold text-gray-900">{datosCompletos.nombre}</p>
                            <p className="text-sm text-gray-500">Cliente Verificado</p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-gray-500 mb-1">PERIODO</p>
                            <p className="text-base font-bold text-gray-900">{datosCompletos.periodo}</p>
                            <p className="text-sm text-gray-500">{datosCompletos.fechaInicio} - {datosCompletos.fechaFin}</p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-gray-500 mb-1">VALOR TOTAL</p>
                            <p className="text-base font-bold text-gray-900">{datosCompletos.valorTotal}</p>
                            <p className="text-sm text-gray-500">Incluye depósito</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <button type="button"
                            onClick={handleSeleccionarAceptar}
                            className={`border-2 rounded-lg p-5 cursor-pointer transition-all duration-200 ${
                                opcionSeleccionada === 'aceptar' 
                                    ? 'bg-green-50 border-green-300 shadow-md' 
                                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Check className={`w-5 h-5 ${
                                    opcionSeleccionada === 'aceptar' ? 'text-green-600' : 'text-gray-400'
                                }`} />
                                <h3 className="text-xl font-semibold text-green-600">Aceptar Reserva</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Al aceptar la reserva, el cliente recibirá instrucciones de pago y podrá proceder con el contrato.
                            </p>
                            <div className="space-y-2 text-sm text-gray-700 mb-4">
                                <div className="flex items-start gap-2">
                                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'aceptar' ? 'text-green-600' : 'text-gray-400'
                                    }`} />
                                    <span>Cliente notificado inmediatamente</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'aceptar' ? 'text-green-600' : 'text-gray-400'
                                    }`} />
                                    <span>Instrucciones de pago enviadas</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'aceptar' ? 'text-green-600' : 'text-gray-400'
                                    }`} />
                                    <span>Contrato generado automáticamente</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'aceptar' ? 'text-green-600' : 'text-gray-400'
                                    }`} />
                                    <span>Periodo de gracia de 48h para pago</span>
                                </div>
                            </div>
                        </button>

                        <button type="button" 
                            onClick={handleSeleccionarRechazar}
                            className={`border-2 rounded-lg p-5 cursor-pointer transition-all duration-200 ${
                                opcionSeleccionada === 'rechazar' 
                                    ? 'bg-red-50 border-red-300 shadow-md' 
                                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <X className={`w-5 h-5 ${
                                    opcionSeleccionada === 'rechazar' ? 'text-red-600' : 'text-gray-400'
                                }`} />
                                <h3 className="text-xl font-semibold text-red-600">Rechazar Reserva</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Si no puedes cumplir con esta reserva, puedes rechazarla proporcionando una razón.
                            </p>
                            <div className="space-y-2 text-sm text-gray-700 mb-4">
                                <div className="flex items-start gap-2">
                                    <span className={`mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'rechazar' ? 'text-red-600' : 'text-gray-400'
                                    }`}>•</span>
                                    <span>Cliente notificado del rechazo</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className={`mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'rechazar' ? 'text-red-600' : 'text-gray-400'
                                    }`}>•</span>
                                    <span>Razón incluida en notificación</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className={`mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'rechazar' ? 'text-red-600' : 'text-gray-400'
                                    }`}>•</span>
                                    <span>Bodega queda disponible</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className={`mt-0.5 flex-shrink-0 ${
                                        opcionSeleccionada === 'rechazar' ? 'text-red-600' : 'text-gray-400'
                                    }`}>•</span>
                                    <span>No afecta tu calificación</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {opcionSeleccionada === 'aceptar' && (
                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-6">
                        <div className="flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Importante</h3>
                                <p className="text-sm text-gray-700">
                                    Una vez aceptes la reserva, se iniciará el proceso de pago y contrato. Asegúrate de que la bodega estará disponible en las fechas indicadas.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {opcionSeleccionada === 'rechazar' && (
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <MessageSquare className="w-5 h-5 text-gray-600" />
                            <h3 className="font-semibold text-xl text-gray-900">Razón del Rechazo</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            Explica brevemente por qué no puedes aceptar esta reserva
                        </p>
                        <textarea
                            value={razonRechazo}
                            onChange={(e) => setRazonRechazo(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                            placeholder="Ej: La bodega no estará disponible en las fechas solicitadas debido a mantenimiento programado..."
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            Este mensaje será enviado directamente al cliente.
                        </p>
                    </div>
                )}

                {opcionSeleccionada === 'rechazar' ? (
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleConfirmarRechazo}
                            disabled={!razonRechazo.trim()}
                            className={`py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 ${
                                razonRechazo.trim()
                                    ? 'bg-red-600 text-white hover:bg-red-700'
                                    : 'bg-red-300 text-white cursor-not-allowed'
                            }`}
                        >
                            <X size={20} />
                            Confirmar Rechazo
                        </button>
                        <button
                            onClick={onRevisarDetalles}
                            className="bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Revisar Detalles
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => {
                                if (opcionSeleccionada === 'aceptar') {
                                    setMostrarConfirmarAceptar(true);
                                }
                            }}
                            disabled={opcionSeleccionada !== 'aceptar'}
                            className={`py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 ${
                                opcionSeleccionada === 'aceptar'
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <Check size={20} />
                            Confirmar Aceptación
                        </button>
                        <button
                            onClick={onRevisarDetalles}
                            className="bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Revisar Detalles
                        </button>
                    </div>
                )}

                {mostrarConfirmarAceptar && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirmar Aceptación</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                ¿Estás seguro de que deseas aceptar esta reserva? Se notificará al cliente y se iniciará el proceso de pago.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setMostrarConfirmarAceptar(false)}
                                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirmarAceptar}
                                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SolicitudRevisarResponder;
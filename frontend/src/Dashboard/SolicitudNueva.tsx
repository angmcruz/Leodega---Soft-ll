import { Bell, Building, Calendar, Clock, DollarSign, Mail, MapPin, Phone, User } from 'lucide-react';
import React from 'react';
import type { Solicitud } from './Interfaces/SolicitudesData';

interface SolicitudNuevaProps {
    solicitud: Solicitud;
    onVolver: () => void;
    onRevisarResponder: (solicitud: Solicitud) => void;
}

const SolicitudNueva: React.FC<SolicitudNuevaProps> = ({ solicitud, onVolver, onRevisarResponder }) => {
    const datosCompletos = {
        nombre: solicitud.nombre,
        direccion: solicitud.direccion,
        fecha: solicitud.fecha,
        tipo: solicitud.tipo,
        estado: solicitud.estado,
        email: `${solicitud.nombre.toLowerCase().replaceAll(' ', '.')}@email.com`,
        telefono: '+57 300 123 4567',
        bodega: 'Bodega Centro Logístico Norte',
        ubicacion: 'Bogotá, Zona Industrial',
        area: '150 m²',
        duracion: '3 meses',
        fechaInicio: '15 Agosto 2024',
        fechaFin: '15 Noviembre 2024',
        arriendoMensual: '$2.500.000',
        deposito: '$2.500.000',
        totalEstimado: '$10.000.000',
        tiempoTranscurrido: 'Hace 5 minutos'
    };

    const handleRevisarResponder = () => {
        onRevisarResponder(solicitud);
    };

    return (
        <div className="pl-8 pt-5 pr-8 bg-white">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Solicitudes</h1>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-orange-100 rounded-3xl p-2 flex-shrink-0 h-12 w-12">
                            <div className="flex justify-center items-center pt-[2px] pl-[2px]">
                                <Bell color="orange" size={28} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[23px] font-bold text-gray-900 mb-1">Nueva Solicitud de Reserva</h2>
                            <p className="text-gray-500 text-sm">{datosCompletos.tiempoTranscurrido}</p>
                        </div>
                    </div>
                        
                        
                    </div>
                    <div className="rounded-md mb-3 ">
                        <span className="text-orange-600 font-medium text-[12px] py-1 px-3 ml-[-4px] rounded-2xl bg-orange-50 ">Pendiente de Respuesta</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <User />
                                <h3 className="my-3 text-[22px] ml-2 mr-10 font-semibold text-gray-900 leading-6">Información del Cliente</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 pb-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{datosCompletos.nombre}</h4>
                                        <span className="text-xs text-gray-500">Cliente Verificado</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-300 my-4"></div>
                                
                                <div className="space-y-2 pt-2">
                                    <div className="flex items-start text-gray-600 text-sm gap-2">
                                        <Mail size={17} />
                                        <span className="break-all">{datosCompletos.email}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 text-sm gap-2">
                                        <Phone size={17} />
                                        {datosCompletos.telefono}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Building />
                                <h3 className="my-3 text-[22px] ml-2 mr-14 font-semibold text-gray-900 leading-6">Detalles de la Reserva</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-semibold text-gray-500 block mb-1">BODEGA</span>
                                    <span className="text-sm text-gray-900 font-semibold block">{datosCompletos.bodega}</span>
                                    <div className="flex items-center mt-1 gap-1">
                                        <MapPin size={11} />
                                        <span className="text-xs text-gray-500">{datosCompletos.ubicacion}</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-300 my-4"></div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs font-semibold text-gray-500 block mb-1">ÁREA</span>
                                        <span className="text-sm text-gray-900 font-semibold">{datosCompletos.area}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-gray-500 block mb-1">DURACIÓN</span>
                                        <span className="text-sm text-gray-900 font-semibold">{datosCompletos.duracion}</span>
                                    </div>
                                </div>
                                
                                <div className="space-y-1">
                                    <div className="flex items-center text-gray-600 text-xs gap-1">
                                        <Calendar size={16} className='mr-1'/>
                                        <span>Inicio: {datosCompletos.fechaInicio}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 text-xs gap-1">
                                        <Clock size={16} className='mr-1'/>
                                        
                                        <span>Fin: {datosCompletos.fechaFin}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <DollarSign />
                                <h3 className="my-3 text-[22px] ml-2 mr-10 font-semibold text-gray-900 leading-6">Información Financiera</h3>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Arriendo mensual:</span>
                                    <span className="text-sm text-gray-900 font-semibold">{datosCompletos.arriendoMensual}</span>
                                </div>
                                
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span className="text-sm text-gray-600">Depósito:</span>
                                    <span className="text-sm text-gray-900 font-semibold">{datosCompletos.deposito}</span>
                                </div>
                                
                                <div className="flex justify-between items-center pt-1">
                                    <span className="text-sm font-semibold text-gray-900">Total estimado:</span>
                                    <span className="text-lg font-bold text-gray-900">{datosCompletos.totalEstimado}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Requeridas</h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <button 
                        onClick={handleRevisarResponder}
                        className="text-[15px] flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                        Revisar y Responder
                    </button>
                    
                    <button 
                        onClick={onVolver}
                        className="text-[15px] flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                    >
                        Ver Dashboard
                    </button>
                </div>
                
                <div className="text-sm text-gray-600">
                    Tienes 24 horas para responder a esta solicitud. Después de este tiempo, la solicitud expirará automáticamente.
                </div>
            </div>
        </div>
    );
};

export default SolicitudNueva;
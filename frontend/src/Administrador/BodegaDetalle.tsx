import React from 'react';
import { ArrowLeft, Share2, Heart } from 'lucide-react';
import type { Bodega } from './Interfaces/SolicitudesData';

interface BodegaDetalleProps {
    bodega: Bodega;
    onVolver: () => void;
}

const BodegaDetalle: React.FC<BodegaDetalleProps> = ({ bodega, onVolver }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-white px-8 py-4 flex items-center justify-between border-b">
                <button onClick={onVolver} className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <ArrowLeft className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold">leodega</span>
                </button>
                
                <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-6">
                <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: '400px' }}>
                    <img src="/src/img/Bodega1.jpg" alt="Bodega" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Espacio en Alquiler
                        </span>
                        <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Disponible
                        </span>
                    </div>
                    <div className="absolute bottom-9 left-4">
                        <h1 className="text-white text-3xl font-bold mb-2">
                            Bodega Doble Almacenaje (Centro de la Ciudad)
                        </h1>
                        
                    </div>
                </div>

                <div className="grid  gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-4xl font-bold text-purple-600">$425</span>
                                        <span className="text-gray-500">/USD mensual</span>
                                    </div>
                                    <div className="flex gap-6 text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
                                            </svg>
                                            300 m²
                                        </span>
                                        <span>Altura: 6 metros</span>
                                    </div>
                                </div>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                    Reservar
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Descripción</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Amplia bodega con excelentes 24/7 buena seguridad excelente sector industrial, centro de la ciudad.
                            </p>
                        </div>
                        <div className="pt-5">
                            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Información de la Bodega</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Nombre</div>
                                        <div className="font-medium text-gray-900">{bodega.nameBodega}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Número de Bodega</div>
                                        <div className="font-medium text-gray-900">{bodega.bodega}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Teléfono</div>
                                        <div className="font-medium text-gray-900">{bodega.phoneNumber}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Email</div>
                                        <div className="font-medium text-gray-900">{bodega.email}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">País</div>
                                        <div className="font-medium text-gray-900">{bodega.country}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Estado</div>
                                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                                            bodega.status === 'Active'
                                                ? 'bg-teal-100 text-teal-700'
                                                : 'bg-red-100 text-red-700'
                                        }`}>
                                            {bodega.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodegaDetalle;
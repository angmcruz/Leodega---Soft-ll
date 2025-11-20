import React, { useState } from 'react';
import type { Bodega } from './Interfaces/SolicitudesData';
import { ChevronDown, Heart, MapPin, MoveLeft, Search, Share2 } from 'lucide-react';
import BodegaModal from './BodegaModal';
import bodega1 from '../img/Bodega1.jpg';
interface BodegaDetalleProps {
    bodega: Bodega;
    onVolver: () => void;
}

const BodegaDetalle: React.FC<BodegaDetalleProps> = ({ bodega, onVolver }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
    const [mostrarMenuOrden, setMostrarMenuOrden] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    const getSortLabel = () => {
        switch (sortBy) {
            case 'newest':
                return 'Newest';
            case 'oldest':
                return 'Oldest';
            case 'name':
                return 'Name A-Z';
            default:
                return 'Newest';
        }
    };
    return (
        <div className="pl-8 pt-5 pr-8 bg-[#f5f6fa] min-h-screen">
            <div className="mb-6 mt-3 flex flex-row justify-between">
                <h1 className="text-2xl font-semibold text-gray-900 pt-3">Bodegas</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white w-80 text-sm"
                        />
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setMostrarMenuOrden(!mostrarMenuOrden)}
                            className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white transition-colors">
                            <span className="text-sm text-gray-600">Short by:</span>
                            <span className="text-sm font-medium text-gray-900">{getSortLabel()}</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>

                        {mostrarMenuOrden && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Close sort menu"
                                    className="fixed inset-0 z-10 cursor-default bg-transparent"
                                    onClick={() => setMostrarMenuOrden(false)}
                                >
                                </button>


                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                                    <button
                                        onClick={() => {
                                            setSortBy('newest');
                                            setMostrarMenuOrden(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 rounded-t-lg transition-colors ${sortBy === 'newest' ? 'text-purple-600 font-medium bg-purple-50' : 'text-gray-700'
                                            }`}
                                    >
                                        Newest
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSortBy('oldest');
                                            setMostrarMenuOrden(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${sortBy === 'oldest' ? 'text-purple-600 font-medium bg-purple-50' : 'text-gray-700'
                                            }`}
                                    >
                                        Oldest
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSortBy('name');
                                            setMostrarMenuOrden(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 rounded-b-lg transition-colors ${sortBy === 'name' ? 'text-purple-600 font-medium bg-purple-50' : 'text-gray-700'
                                            }`}
                                    >
                                        Name A-Z
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
                        Añadir Nueva Bodega
                    </button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='bg-white h-[470px]'>
                    <div className='flex flex-row justify-between items-center px-4 pt-5 pb-4'>
                        <div className='flex flex-row items-center gap-3 ml-2'>
                            <button
                                onClick={onVolver}
                                className='hover:bg-gray-100 p-2 rounded-lg transition-colors'
                            >
                                <MoveLeft className='text-gray-700' size={24} />
                            </button>
                            <div className='bg-[#9441d8] h-10 w-10 rounded-lg flex items-center justify-center'>
                                <h3 className='text-white font-semibold text-lg'>L</h3>
                            </div>
                            <span className='text-lg font-medium'>leodega</span>
                        </div>
                        <div className='flex flex-row items-center gap-4 mr-3'>
                            <Share2 className='text-gray-700' size={24} />
                            <Heart className='text-gray-700' size={24} />
                        </div>
                    </div>
                    <div className='relative h-[400px] w-full'>
                        <img
                            src={bodega1}
                            alt="Bodega"
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-30'></div>
                        <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                            <div className='flex flex-row gap-2 mb-3'>
                                <span className='bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full'>
                                    Espacio en Alquiler
                                </span>
                                <span className='bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full'>
                                    Disponible
                                </span>
                            </div>
                            <h1 className='text-2xl font-bold mb-2'>
                                Bodega Doble Almacenaje (Centro de la Ciudad)
                            </h1>
                            <div className='flex flex-row items-center gap-4 text-sm'>
                                <div className='flex items-center gap-1'>
                                    <MapPin size={16} />
                                    <span>Martha de Roldos Mx-18 Y2</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='text-yellow-400'>⭐</span>
                                    <span className='font-semibold'>4.8</span>
                                    <span className='text-gray-200'>(24 reseñas)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-6 mb-6'>
                    <div className='flex flex-row justify-between items-start p-6 border-b border-gray-200'>
                        <div>
                            <div className='flex items-baseline gap-2 mb-3'>
                                <h2 className='text-4xl font-bold text-purple-600'>$425</h2>
                                <span className='text-gray-500 text-lg'>/USD mensual</span>
                            </div>
                            <div className='flex flex-row gap-4 text-gray-600'>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                                        className='w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer' />
                                    <span>300 m²</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>Altura: 6 metros</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setMostrarModal(true)}
                            className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
                        >
                            Reservar
                        </button>
                    </div>
                    <div className='p-6'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>Descripción</h3>
                        <p className='text-gray-600 leading-relaxed'>
                            Amplia bodega con excelentes 24/7 buena seguridad excelente sector industrial, centro de la ciudad.
                        </p>
                    </div>
                    <div className='p-6 border-t border-gray-200'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>Características</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex items-center gap-2 text-gray-700'>
                                <span className='text-green-500'>✓</span>
                                <span>Seguridad 24/7</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-700'>
                                <span className='text-green-500'>✓</span>
                                <span>Zona Industrial</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-700'>
                                <span className='text-green-500'>✓</span>
                                <span>Centro de la Ciudad</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-700'>
                                <span className='text-green-500'>✓</span>
                                <span>Amplio Espacio</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 border-t border-gray-200'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>Ubicación</h3>
                        <div className='flex items-start gap-2 text-gray-700'>
                            <MapPin size={20} className='mt-1' color='#9333ea' />
                            <div>
                                <p className='font-medium'>Martha de Roldos Mx-18 Y2</p>
                                <p className='text-gray-500 text-sm'>Centro de la Ciudad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BodegaModal
                isOpen={mostrarModal}
                onClose={() => setMostrarModal(false)}
            />
        </div>

    );
};

export default BodegaDetalle;
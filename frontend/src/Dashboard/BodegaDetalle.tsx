import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BodegaModal from './BodegaModal';
import api from '../api/axios';

interface BodegaDetalleProps {
    bodega: { id: number };
    onVolver: () => void;
}

const BodegaDetalle: React.FC<BodegaDetalleProps> = ({ bodega, onVolver }) => {
    const navigate = useNavigate();
    const [detalle, setDetalle] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        const fetchDetalle = async () => {
            try {
                const { data } = await api.get(`/store-rooms/${bodega.id}/detail`);
                setDetalle(data);
            } catch (error) {
                console.error('Error cargando detalles de bodega', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetalle();
    }, [bodega.id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!detalle) {
        return <div>No se pudo cargar la bodega</div>;
    }

    return (
        <div className="w-full h-full bg-gray-50">
            {/* Main Content - Grid 3 columnas */}
            <div className="w-full grid grid-cols-3 gap-6 p-6 overflow-y-auto" style={{ height: 'calc(100% - 65px)' }}>
                {/* Left: Images (2 columnas) */}
                <div className="col-span-2 space-y-8"> {/* Cambiado de space-y-4 a space-y-8 */}
                    {/* Contenedor de Imágenes Principales */}
                    <div className="grid grid-cols-3 gap-4 " style={{ height: '256px' }}> {/* Cambiado gap-2 a gap-4 */}
                        <div className="col-span-2 overflow-hidden rounded-xl shadow-md"> {/* Cambiado rounded-lg a rounded-xl y añadido shadow */}
                            <img
                                src={detalle.photos?.[0]}
                                className="h-full w-full object-cover"
                                alt="Imagen principal de la bodega"
                            />
                        </div>
                        <div className="flex flex-col space-y-4"> {/* Cambiado space-y-2 a space-y-4 */}
                            {detalle.photos?.slice(1, 3).map((img: string, i: number) => (
                                <div key={i} className="overflow-hidden rounded-xl shadow-md" style={{ height: 'calc(160px - 8px)' }}>
                                    <img
                                        src={img}
                                        className="h-full w-full object-cover"
                                        alt={`Imagen secundaria ${i + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Espaciador después de las imágenes */}
                    <div className="mt-2 pt-10"></div> {/* Espacio adicional después de las imágenes */}

                    {/* Price and Actions */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-600 font-bold text-2xl">
                                    ${detalle.prices?.[0]?.price ?? '—'}
                                    <span className="text-sm font-normal text-gray-500"> USD mensual</span>
                                </p>
                                <p className="text-gray-600 text-sm mt-1">
                                    {detalle.size} m² - {detalle.room_type}
                                </p>
                            </div>
                            <div className="flex space-x-3">
                                <button 
                                    onClick={() => navigate(`/reportIncident/${bodega.id}`)}
                                    className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors"
                                >
                                    Reportar
                                </button>
                                <button 
                                    onClick={() => setMostrarModal(true)}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors"
                                >
                                    Reservar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Descripción</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {detalle.description}
                        </p>
                    </div>

                    {/* Características */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <h3 className="font-semibold mb-6 text-lg text-gray-800">Características</h3>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                            {[
                                `${detalle.size} m²`, 
                                "Estacionamiento", 
                                "24/7", 
                                "Internet", 
                                "CCTV", 
                                "Muelle de carga"
                            ].map((item, i) => (
                                <div key={i} className="border rounded-lg p-4 text-gray-700 bg-gray-50 text-center hover:bg-gray-100 transition-colors">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Imágenes Adicionales */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <h3 className="font-semibold mb-6 text-lg text-gray-800">Imágenes Adicionales</h3>
                        <div className="grid grid-cols-3 gap-6"> {/* Cambiado gap-4 a gap-6 */}
                            {detalle.photos?.map((img: string, i: number) => (
                                <div key={i} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <img
                                        src={img}
                                        className="h-32 w-full object-cover"
                                        alt={`Imagen adicional ${i + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Especificaciones Técnicas */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <h3 className="font-semibold mb-6 text-lg text-gray-800">Especificaciones Técnicas</h3>
                        <table className="w-full text-gray-700">
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 font-medium text-gray-600">Dimensiones</td>
                                    <td className="py-3 text-right">20m x 15m</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 font-medium text-gray-600">Altura</td>
                                    <td className="py-3 text-right">6 metros</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 font-medium text-gray-600">Tipo de suelo</td>
                                    <td className="py-3 text-right">Concreto industrial</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 font-medium text-gray-600">Puertas</td>
                                    <td className="py-3 text-right">2 puertas industriales</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 font-medium text-gray-600">Iluminación</td>
                                    <td className="py-3 text-right">LED industrial</td>
                                </tr>
                                <tr>
                                    <td className="py-3 font-medium text-gray-600">Ventilación</td>
                                    <td className="py-3 text-right">Natural y forzada</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right: Contact Card (1 columna) */}
                <div className="col-span-1">
                    <div className="border rounded-xl p-6 shadow-sm sticky top-6 bg-white"> {/* Cambiado top-0 a top-6 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">
                                {detalle.landlord?.name ? (detalle.landlord.name.charAt(0) + detalle.landlord.name.charAt(1).toUpperCase()) : 'LD'}
                            </div>
                            <h2 className="font-semibold mt-4 text-lg text-gray-800">
                                {detalle.landlord?.name} {detalle.landlord?.lastname}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">Arrendador</p>
                            
                            <button className="mt-6 px-4 py-3 bg-purple-600 text-white rounded-lg w-full text-sm font-medium hover:bg-purple-700 transition-colors">
                                Contactar Ahora
                            </button>
                            <button className="mt-3 px-4 py-2.5 border-2 border-purple-600 text-purple-600 rounded-lg w-full text-sm font-medium hover:bg-purple-50 transition-colors">
                                Enviar Email a {detalle.landlord?.email}
                            </button>
                            
                            <div className="mt-6 text-sm text-gray-600 text-left w-full space-y-3">
                                <div>
                                    <p className="font-medium text-gray-700">Horario de atención</p>
                                    <p className="mt-1">Lunes a Viernes: 08h00 - 17h00</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">Disponibilidad</p>
                                    <p className="mt-1">Inmediata</p>
                                </div>
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
import React, { useState } from 'react';
import {Filter, RotateCcw } from 'lucide-react';
import SolicitudNueva from './SolicitudNueva';
import SolicitudRevisarResponder from './SolicitudRevisarResponder';
import SolicitudRechazada from './SolicitudRechazada';
import type { Solicitud } from './Interfaces/SolicitudesData';

const Solicitudes: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Newest');
    const [filtroFecha, setFiltroFecha] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');
    const [solicitudSeleccionada, setSolicitudSeleccionada] = useState<Solicitud | null>(null);

    const [mostrarSolicitudNueva, setMostrarSolicitudNueva] = useState(false);
    const [mostrarRevisarResponder, setMostrarRevisarResponder] = useState(false);
    const [mostrarSolicitudRechazada, setMostrarSolicitudRechazada] = useState(false);
    const [razonRechazo, setRazonRechazo] = useState('');

    const solicitudes: Solicitud[] = [
        { id: 1, nombre: 'Christine Brooks', direccion: '089 Kutch Green Apt. 448', fecha: '04 Sep 2019', tipo: 'Solicitud Bodega', estado: 'Completada' },
        { id: 2, nombre: 'Rosie Pearson', direccion: '979 Immanuel Ferry Suite 526', fecha: '28 May 2019', tipo: 'Reporte Bodega', estado: 'En proceso' },
        { id: 3, nombre: 'Darrell Caldwell', direccion: '8587 Frida Ports', fecha: '23 Nov 2019', tipo: 'Solicitud Bodega', estado: 'Rechazada' },
        { id: 4, nombre: 'Gilbert Johnston', direccion: '768 Destiny Lake Suite 600', fecha: '05 Feb 2019', tipo: 'Reporte Usuario', estado: 'Completada' },
        { id: 5, nombre: 'Alan Cain', direccion: '042 Mylene Throughway', fecha: '29 Jul 2019', tipo: 'Aceptar Usuario', estado: 'En proceso' },
        { id: 6, nombre: 'Alfred Murray', direccion: '543 Weimann Mountain', fecha: '15 Aug 2019', tipo: 'Reporte Usuario', estado: 'Completada' },
        { id: 7, nombre: 'Maggie Sullivan', direccion: 'New Scottlieberg', fecha: '21 Dec 2019', tipo: 'Solicitud Bodega', estado: 'En proceso' },
        { id: 8, nombre: 'Rosie Todd', direccion: 'New Jon', fecha: '30 Apr 2019', tipo: 'Solicitud Bodega', estado: 'En espera' },
        { id: 9, nombre: 'Dollie Hines', direccion: '124 Lyla Forge Suite 975', fecha: '09 Jan 2019', tipo: 'Reporte Bodega', estado: 'En proceso' },
    ];

    const totalPages = 5;

    const solicitudesFiltradas = solicitudes.filter((solicitud) => {
        const coincideBusqueda = solicitud.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                solicitud.direccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                solicitud.tipo.toLowerCase().includes(searchTerm.toLowerCase());
        const coincideFecha = filtroFecha === '' || solicitud.fecha.includes(filtroFecha);
        const coincideTipo = filtroTipo === '' || solicitud.tipo === filtroTipo;
        const coincideEstado = filtroEstado === '' || solicitud.estado === filtroEstado;
        return coincideBusqueda && coincideFecha && coincideTipo && coincideEstado;
    });

    const reiniciarFiltros = () => {
        setFiltroFecha('');
        setFiltroTipo('');
        setFiltroEstado('');
        setSearchTerm('');
    };

    const handleRowClick = (solicitud: Solicitud) => {
        setSolicitudSeleccionada(solicitud);
        setMostrarSolicitudNueva(true);
    };

    const handleVolverASolicitudes = () => {
        setMostrarSolicitudNueva(false);
        setMostrarRevisarResponder(false);
        setMostrarSolicitudRechazada(false);
        setSolicitudSeleccionada(null);
        setRazonRechazo('');
    };

    const handleRevisarResponder = (solicitud: Solicitud) => {
        setSolicitudSeleccionada(solicitud);
        setMostrarSolicitudNueva(false);
        setMostrarRevisarResponder(true);
    };

    const handleRevisarDetalles = () => {
        setMostrarRevisarResponder(false);
        setMostrarSolicitudNueva(true);
    };

    const handleRechazarSolicitud = (razon: string) => {
        setRazonRechazo(razon);
        setMostrarSolicitudNueva(false);
        setMostrarRevisarResponder(false);
        setMostrarSolicitudRechazada(true);
    };

    if (mostrarSolicitudRechazada && solicitudSeleccionada) {
        return (
            <SolicitudRechazada
                solicitud={solicitudSeleccionada}
                razonRechazo={razonRechazo}
                onVolverDashboard={handleVolverASolicitudes}
            />
        );
    }

    if (mostrarRevisarResponder && solicitudSeleccionada) {
        return (
            <SolicitudRevisarResponder
                solicitud={solicitudSeleccionada}
                onVolver={handleVolverASolicitudes}
                onRevisarDetalles={handleRevisarDetalles}
                onRechazar={handleRechazarSolicitud}
            />
        );
    }

    if (mostrarSolicitudNueva && solicitudSeleccionada) {
        return (
            <SolicitudNueva 
                solicitud={solicitudSeleccionada}
                onVolver={handleVolverASolicitudes}
                onRevisarResponder={handleRevisarResponder}
            />
        );
    }

    return (
        
        <div className="pl-8 pt-5 pr-8 bg-[#f5f6fa] min-h-screen">
            <div className="mb-6 mt-3">
                <h1 className="text-2xl font-semibold text-gray-900">Solicitudes</h1>
            </div>

            <div className="inline-flex items-center gap-3 mb-6 pl-4 pr-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 pr-1">
                    <Filter className="w-5 h-5 text-gray-600" />
                </div>
                <div className="h-[65px] w-px bg-gray-300"></div>
                <select value={filtroFecha} onChange={(e) => setFiltroFecha(e.target.value)}
                    className="px-4 py-2 bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer hover:text-gray-900">
                    <option value="" >Fecha</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
                
                <div className="h-[65px] w-px bg-gray-300"></div>

                <select 
                    value={filtroTipo}
                    onChange={(e) => setFiltroTipo(e.target.value)}
                    className="px-4 py-2 bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer hover:text-gray-900"
                >
                    <option value="">Tipo de Solic.</option>
                    <option value="Solicitud Bodega">Solicitud Bodega</option>
                    <option value="Reporte Bodega">Reporte Bodega</option>
                    <option value="Reporte Usuario">Reporte Usuario</option>
                    <option value="Aceptar Usuario">Aceptar Usuario</option>
                </select>

                <div className="h-[65px] w-px bg-gray-300"></div>

                <select 
                    value={filtroEstado}
                    onChange={(e) => setFiltroEstado(e.target.value)}
                    className="px-4 py-2 bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer hover:text-gray-900"
                >
                    <option value="">Estado</option>
                    <option value="Completada">Completada</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Rechazada">Rechazada</option>
                    <option value="En espera">En espera</option>
                </select>

                <div className="h-[65px] w-px bg-gray-300"></div>
                <button onClick={reiniciarFiltros} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors" >
                    <RotateCcw className="w-4 h-4" />
                    Reiniciar Filtro
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                NOMBRE
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                DIRECCIÓN
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                FECHA
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                TIPO
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                ESTADO
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {solicitudesFiltradas.length > 0 ? (
                            solicitudesFiltradas.map((solicitud) => (
                                <tr key={solicitud.id}  className="hover:bg-gray-50 cursor-pointer transition-colors duration-150" onClick={() => handleRowClick(solicitud)} >
                                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.id.toString().padStart(5, '0')}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.nombre}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.direccion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.fecha}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.tipo}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-md ${
                                                solicitud.estado === 'Completada'
                                                    ? 'bg-green-100 text-green-700'
                                                    : solicitud.estado === 'En proceso'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : solicitud.estado === 'Rechazada'
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-gray-100 text-gray-700'
                                            }`}
                                        >
                                            {solicitud.estado}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
                                    No se encontraron solicitudes con los filtros aplicados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                        Mostrando {solicitudesFiltradas.length} de {solicitudes.length} solicitudes
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 rounded hover:bg-gray-100">
                            &lt;
                        </button>
                        <button className="px-3 py-1 bg-purple-600 text-white rounded">1</button>
                        <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
                        <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
                        <button className="px-3 py-1 rounded hover:bg-gray-100">4</button>
                        <span className="px-2">...</span>
                        <button className="px-3 py-1 rounded hover:bg-gray-100">{totalPages}</button>
                        <button className="px-3 py-1 rounded hover:bg-gray-100">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solicitudes;
import React, { useEffect, useState } from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import api from '../api/axios';
import SolicitudNueva from './SolicitudNueva';
import SolicitudRevisarResponder from './SolicitudRevisarResponder';
import SolicitudRechazada from './SolicitudRechazada';
import type { Solicitud } from './Interfaces/SolicitudesData';

const Reportes: React.FC = () => {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [filtroFecha, setFiltroFecha] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');

    const [solicitudSeleccionada, setSolicitudSeleccionada] = useState<Solicitud | null>(null);
    const [mostrarSolicitudNueva, setMostrarSolicitudNueva] = useState(false);
    const [mostrarRevisarResponder, setMostrarRevisarResponder] = useState(false);
    const [mostrarSolicitudRechazada, setMostrarSolicitudRechazada] = useState(false);
    const [razonRechazo, setRazonRechazo] = useState('');

    // 🔹 CARGAR REPORTES DESDE BD
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const { data } = await api.get('/reports');

                const mapped: Solicitud[] = data.map((report: any) => ({
                    id: report.id,
                    nombre: report.user?.name ?? 'Usuario desconocido',
                    direccion: report.store?.direction ?? 'Sin dirección',
                    fecha: new Date(report.created_at).toLocaleDateString(),
                    tipo: report.report_type,
                    estado:
                        report.status === 'pending'
                            ? 'En proceso'
                            : report.status === 'resolved'
                            ? 'Completada'
                            : 'En revisión',
                }));

                setSolicitudes(mapped);
            } catch (error) {
                console.error('Error cargando reportes', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    // 🔹 FILTROS
    const solicitudesFiltradas = solicitudes.filter((solicitud) => {
        const coincideBusqueda =
            solicitud.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.direccion.toLowerCase().includes(searchTerm.toLowerCase());

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

    const handleRechazarSolicitud = (razon: string) => {
        setRazonRechazo(razon);
        setMostrarSolicitudNueva(false);
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
                onRechazar={handleRechazarSolicitud}
                onRevisarDetalles={() => setMostrarSolicitudNueva(true)}
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

    if (loading) {
        return <div className="p-6">Cargando reportes...</div>;
    }

    return (
    <div className="pl-8 pt-5 pr-8 bg-[#f5f6fa] min-h-screen">
        <div className="mb-6 mt-3">
            <h1 className="text-2xl font-semibold text-gray-900">Reportes</h1>
        </div>

        {/* FILTROS */}
        <div className="inline-flex items-center gap-3 mb-6 pl-4 pr-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 pr-1">
                <Filter className="w-5 h-5 text-gray-600" />
            </div>

            <div className="h-[65px] w-px bg-gray-300" />

            <select
                value={filtroFecha}
                onChange={(e) => setFiltroFecha(e.target.value)}
                className="px-4 py-2 bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
            >
                <option value="">Fecha</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>

            <div className="h-[65px] w-px bg-gray-300" />

            <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="px-4 py-2 bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
            >
                <option value="">Tipo de Reporte</option>
                <option value="Acceso">Acceso</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Infraestructura">Infraestructura</option>
            </select>

            <div className="h-[65px] w-px bg-gray-300" />

            <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="px-4 py-2 bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
            >
                <option value="">Estado</option>
                <option value="En proceso">En proceso</option>
                <option value="Completada">Completada</option>
                <option value="En revisión">En revisión</option>
            </select>

            <div className="h-[65px] w-px bg-gray-300" />

            <button
                onClick={reiniciarFiltros}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
            >
                <RotateCcw className="w-4 h-4" />
                Reiniciar Filtro
            </button>
        </div>

        {/* TABLA */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            ID
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Usuario
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Dirección
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Fecha
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Tipo
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Estado
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {solicitudesFiltradas.length > 0 ? (
                        solicitudesFiltradas.map((s) => (
                            <tr
                                key={s.id}
                                onClick={() => handleRowClick(s)}
                                className="hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {s.id.toString().padStart(5, '0')}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {s.nombre}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {s.direccion}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {s.fecha}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {s.tipo}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-md ${
                                            s.estado === 'Completada'
                                                ? 'bg-green-100 text-green-700'
                                                : s.estado === 'En proceso'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-blue-100 text-blue-700'
                                        }`}
                                    >
                                        {s.estado}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={6}
                                className="px-6 py-12 text-center text-sm text-gray-500"
                            >
                                No se encontraron reportes
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="px-6 py-4 border-t border-gray-200 text-sm text-gray-500">
                Mostrando {solicitudesFiltradas.length} reportes
            </div>
        </div>
    </div>
);
};

export default Reportes;

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface Solicitud {
    id: number;
    nombre: string;
    direccion: string;
    fecha: string;
    tipo: string;
    estado: 'Completada' | 'En proceso' | 'Rechazada' | 'En espera';
}

const Solicitudes: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Newest');
    const [filtroFecha, setFiltroFecha] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');

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

    const reiniciarFiltros = () => {
        setFiltroFecha('');
        setFiltroTipo('');
        setFiltroEstado('');
    };

    return (
        <div className="pl-8 pt-5 pr-8">
            <div className="mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Solicitudes</h1>
            </div>

            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Filtrar por:</span>
                    <select 
                        value={filtroFecha}
                        onChange={(e) => setFiltroFecha(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Fecha</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </select>
                    <select 
                        value={filtroTipo}
                        onChange={(e) => setFiltroTipo(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Tipo de Solic.</option>
                        <option value="Solicitud Bodega">Solicitud Bodega</option>
                        <option value="Reporte Bodega">Reporte Bodega</option>
                        <option value="Reporte Usuario">Reporte Usuario</option>
                        <option value="Aceptar Usuario">Aceptar Usuario</option>
                    </select>
                    <select 
                        value={filtroEstado}
                        onChange={(e) => setFiltroEstado(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Estado</option>
                        <option value="Completada">Completada</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Rechazada">Rechazada</option>
                        <option value="En espera">En espera</option>
                    </select>
                    <button 
                        onClick={reiniciarFiltros}
                        className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                        Reiniciar Filtro
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Short by:</span>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <span className="text-sm font-medium">{sortBy}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                        {solicitudes.map((solicitud) => (
                            <tr key={solicitud.id} className="hover:bg-gray-50">
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
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                        Showing data 1 to 8 of {solicitudes.length} entries
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
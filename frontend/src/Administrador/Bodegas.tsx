import { useEffect, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import api from "../api/axios";

interface Bodega {
    id: number;
    title: string;
    direction: string;
    city: string;
    size: string;
    publication_status: string;
    storage_type: string;
    room_type: string;
}


const Bodegas = () => {
    const [bodegas, setBodegas] = useState<Bodega[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('Newest');

    const user = JSON.parse(localStorage.getItem("auth_user") || "{}");
    const landlordId = user?.landlord?.id || "";
        const totalPages = 5;

    useEffect(() => {
        const fetchStore = async () => {
            try {
                const response = await api.get(`landlords/${landlordId}/storeRooms`);
                setBodegas(response.data);
            } catch (error) {
                console.error("Error al obtener bodegas:", error);
            } finally {
                setLoading(false);
            }
        };
        if (landlordId) fetchStore();
    }, [landlordId]);

    const filterStore = bodegas.filter((bodega) =>
        bodega.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-700';
            case 'pending':
                return 'bg-yellow-100 text-yellow-700';
            case 'rejected':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'approved':
                return 'Aprobado';
            case 'pending':
                return 'Pendiente';
            case 'rejected':
                return 'Rechazado';
            default:
                return 'Desconocido';
        }
    };


    let content;

    if (loading) {
        content = <div className="p-6 text-center text-gray-500">Cargando bodegas...</div>;
    } else if (filterStore.length === 0) {
        content = <div className="p-6 text-center text-gray-500">No se encontraron bodegas.</div>;
    } else {
        content = (
            <table className="w-full">
                <thead className="bg-white border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Título</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ciudad</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Dirección</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tamaño</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo de Bodega</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo de Habitación</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Estado</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filterStore.map((bodega) => (
                        <tr key={bodega.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.title}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.city}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.direction}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.size}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.storage_type}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{bodega.room_type}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-md ${getStatusClass(bodega.publication_status)}`}
                                >
                                    {getStatusLabel(bodega.publication_status)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        );
    }

    return (
        <div className="pl-8 pt-5 pr-8">
            <div className="mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Bodegas</h1>
            </div>

            {/* Barra superior */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar bodega"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <span className="text-sm font-medium">{sortBy}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                        Añadir Nueva Bodega
                    </button>
                </div>
            </div>

            {/* Contenido principal renderizado según el estado */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {content}

                {filterStore.length > 0 && (
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                            Mostrando {filterStore.length > 8 ? "1 a 8" : `1 a ${filterStore.length}`} de {filterStore.length} bodegas
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 rounded hover:bg-gray-100">&lt;</button>
                            <button className="px-3 py-1 bg-purple-600 text-white rounded">1</button>
                            <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
                            <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
                            <button className="px-3 py-1 rounded hover:bg-gray-100">4</button>
                            <span className="px-2">...</span>
                            <button className="px-3 py-1 rounded hover:bg-gray-100">{totalPages}</button>
                            <button className="px-3 py-1 rounded hover:bg-gray-100">&gt;</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );


};

export default Bodegas;

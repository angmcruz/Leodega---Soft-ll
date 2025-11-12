import { useEffect, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import BodegaDetalle from './BodegaDetalle';
import { useNavigate } from 'react-router-dom';

import api from "../api/axios";
import BodegaCard from './BodegaCard';

interface StorePrice {
  id: number;
  store_room_id: number;
  mode: string;
  price: number;
  disponibility: boolean;
}


interface Bodega {
  id: number;
  title: string;
  direction: string;
  city: string;
  size: string;
  publication_status: string;
  storage_type: string;
  room_type: string;
  image?: string;
  storePrices?: StorePrice[];

}

const BodegasArrendador = () => {
  const [bodegas, setBodegas] = useState<Bodega[]>([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
  const [mostrarMenuOrden, setMostrarMenuOrden] = useState(false);
  const [bodegaSeleccionada, setBodegaSeleccionada] = useState<Bodega | null>(null);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [loading, setLoading] = useState(true);


  const user = JSON.parse(localStorage.getItem("auth_user") || "{}");
  const landlordId = user?.landlord?.id || "";
  const totalPages = 40;


  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await api.get(`landlords/${landlordId}/storeRooms`);
        console.log("Respuesta del backend:", response.data);
        const data = response.data.map((b: any) => ({
          ...b,
          storePrices: b.store_prices,
        }));
        setBodegas(data);
      } catch (error) {
        console.error("Error al obtener bodegas:", error);
      } finally {
        setLoading(false);
      }
    };
    if (landlordId) fetchStore();
  }, [landlordId]);

  const bodegasFiltradas = bodegas.filter((bodega) =>
    bodega.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bodega.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bodega.publication_status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bodegasOrdenadas = [...bodegasFiltradas].sort((a, b) => {
    if (sortBy === 'newest') return b.id - a.id;
    if (sortBy === 'oldest') return a.id - b.id;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  const getSortLabel = () => {
    switch (sortBy) {
      case 'newest': return 'Newest';
      case 'oldest': return 'Oldest';
      case 'name': return 'Name A-Z';
      default: return 'Newest';
    }
  };

  // const handleBodegaClick = (bodega: Bodega) => {
  //     setBodegaSeleccionada(bodega);
  //     setMostrarDetalle(true);
  // };

  // const handleVolverABodegas = () => {
  //     setMostrarDetalle(false);
  //     setBodegaSeleccionada(null);
  // };

  // if (mostrarDetalle && bodegaSeleccionada) {
  //     return (
  //         <BodegaDetalle
  //             bodega={bodegaSeleccionada}
  //             onVolver={handleVolverABodegas}
  //         />
  //     );
  // }

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
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white transition-colors"
            >
              <span className="text-sm text-gray-600">Sort by:</span>
              <span className="text-sm font-medium text-gray-900">{getSortLabel()}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {mostrarMenuOrden && (
              <>
                <div className="fixed inset-0 z-[1]" onClick={() => setMostrarMenuOrden(false)}></div>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[2]">
                  {['newest', 'oldest', 'name'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSortBy(type as any);
                        setMostrarMenuOrden(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${sortBy === type ? 'text-purple-600 font-medium bg-purple-50' : 'text-gray-700'
                        }`}
                    >
                      {getSortLabel()}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => navigate("/PreguntaInicio1")}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors"
          >
            Añadir Nueva Bodega
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Cargando bodegas...</div>
      ) : bodegasOrdenadas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bodegasOrdenadas.map((bodega) => (
            <BodegaCard key={bodega.id} {...bodega}
            storePrices={bodega.storePrices}/>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">No se encontraron bodegas</div>
      )}
    </div>
  );
};

export default BodegasArrendador;
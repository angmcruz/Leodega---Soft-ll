import { useEffect, useState } from "react";
import { HeaderArrendador } from "../Arrendador/HeaderArrendador";
import SearchBar from "./SearchBar";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

/* =======================
   TIPOS
======================= */

type StorePhoto = {
  id: number;
  photo_url: string;
};

type StorePrice = {
  price: number;
};

type Warehouse = {
  id: number;
  title: string;
  city: string;
  size: number;
  image: string | null;
  store_prices: StorePrice[];
};



const Storage = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop";


  /* =======================
     FETCH
  ======================= */

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const res = await api.get("/storeRooms");


        setWarehouses(res.data);
      } catch (error) {
        console.error("Error al cargar bodegas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWarehouses();
  }, []);

  /* =======================
     LOADING
  ======================= */

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Cargando bodegas...</p>
      </section>
    );
  }

  /* =======================
     RENDER
  ======================= */

  return (
    <section className="w-full min-h-screen bg-white pb-16">
      <HeaderArrendador />

      <div className="mt-24">
        <SearchBar />
      </div>

      <div className="max-w-7xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {warehouses.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No hay bodegas disponibles
          </p>
        ) : (
          warehouses.map((warehouse) => {
            return (
              <div
                key={warehouse.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition hover:shadow-lg"
              >
                {/* IMAGEN */}
                <div className="relative">
                  <img
                    src={warehouse.image || DEFAULT_IMAGE}
                    alt={warehouse.title}
                    className="w-full h-56 object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror= null;
                      e.currentTarget.src = DEFAULT_IMAGE;
                    }}
                  />

                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                    <Heart className="w-5 h-5 text-[#FF4D6D]" />
                  </button>
                </div>

                {/* INFO */}
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {warehouse.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {warehouse.city} • {warehouse.size} m²
                  </p>

                  <p className="text-[#3B82F6] font-bold text-md mt-2">
                    $
                    {warehouse.store_prices?.[0]?.price ?? "N/A"}
                  </p>

                  <button
                    onClick={() => navigate(`/leodega/${warehouse.id}`)}
                    className="mt-5 flex items-center gap-2 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition w-full justify-center"
                  >
                    Ver bodega <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Storage;

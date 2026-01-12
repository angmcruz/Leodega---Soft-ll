import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, MapPin, MoveLeft, Share2 } from 'lucide-react';
import api from "../api/axios";
import BodegaModal from "../Dashboard/BodegaModal";

export default function LeodegaUI() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [showBodegaModal, setShowBodegaModal] = useState(false);

  useEffect(() => {
    api.get(`/store-rooms/${id}/detail`)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [id]);

  if (!data) return <div className="p-6">Cargando detalle...</div>;

  return (
    <>
      <div className="bg-[#f5f6fa] min-h-screen">
        {/* Contenedor principal centrado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* HEADER */}
          <div className="bg-white rounded-t-xl shadow-sm mb-6">
            <div className="flex justify-between items-center px-6 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <MoveLeft className="text-gray-700" size={24} />
                </button>

                <div className="bg-[#9441d8] h-10 w-10 rounded-lg flex items-center justify-center">
                  <h3 className="text-white font-semibold text-lg">L</h3>
                </div>

                <span className="text-lg font-medium">leodega</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
                  <Share2 className="text-gray-700" size={24} />
                </button>
                <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
                  <Heart className="text-gray-700" size={24} />
                </button>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="relative h-[400px] w-full">
              <img
                src={data.photos?.[0]}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex gap-2 mb-3">
                  <span className="bg-orange-500 text-sm font-medium px-3 py-1 rounded-full">
                    Espacio en Alquiler
                  </span>
                  <span className="bg-green-500 text-sm font-medium px-3 py-1 rounded-full">
                    Disponible
                  </span>
                </div>

                <h1 className="text-2xl font-bold mb-2">
                  {data.title}
                </h1>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{data.city}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* INFO - Contenedor principal de contenido */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna principal - 2/3 del ancho */}
            <div className="lg:col-span-2 space-y-6">
              {/* Precio y botón */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <h2 className="text-4xl font-bold text-purple-600">
                        ${data.prices?.[0]?.price ?? '—'}
                      </h2>
                      <span className="text-gray-500 text-lg">/ USD mensual</span>
                    </div>

                    <div className="text-gray-600">
                      <span>{data.size} m²</span>
                    </div>
                  </div>

                  {/* Botón Aprobar - Ahora abre el modal */}
                  <button
                    onClick={() => setShowBodegaModal(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Aprobar
                  </button>
                </div>
              </div>

              {/* DESCRIPCIÓN */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Descripción
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* CARACTERÍSTICAS */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Características
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>{data.security || "Seguridad 24/7"}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Zona Industrial</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Centro de la Ciudad</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Amplio Espacio</span>
                  </div>
                </div>
              </div>

              {/* UBICACIÓN */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ubicación
                </h3>

                <div className="flex items-start gap-2 text-gray-700">
                  <MapPin size={20} className="mt-1 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{data.direction}</p>
                    <p className="text-gray-500 mt-1">{data.city}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 1/3 del ancho */}
            <div className="lg:col-span-1 space-y-6">
              {/* Información del arrendador */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Información del Arrendador
                </h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
                    {data.landlord?.name?.[0] || "A"}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {data.landlord?.name} {data.landlord?.lastname}
                    </p>
                    <p className="text-sm text-gray-500">Arrendador</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="font-medium">{data.landlord?.phone || "No disponible"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{data.landlord?.email || "No disponible"}</p>
                  </div>
                </div>
              </div>

              {/* Detalles adicionales */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Detalles del Espacio
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Tipo</span>
                    <span className="font-medium">{data.room_type || "Industrial"}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Almacenamiento</span>
                    <span className="font-medium">{data.storage_type || "General"}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Estado</span>
                    <span className={`font-medium ${data.publication_status === 'aproved' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {data.publication_status === 'aproved' ? 'Aprobado' : 'Pendiente'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Disponibilidad</span>
                    <span className="font-medium text-green-500">Inmediata</span>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="space-y-3">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    Contactar Ahora
                  </button>
                  <button className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 rounded-lg transition-colors">
                    Agendar Visita
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors">
                    Guardar en Favoritos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BodegaModal
        isOpen={showBodegaModal}
        onClose={() => setShowBodegaModal(false)}
      />
    </>
  );

}
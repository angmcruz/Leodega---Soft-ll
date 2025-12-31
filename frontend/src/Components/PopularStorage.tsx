import { Heart, Star, ArrowRight } from "lucide-react";
import bodega1 from '../img/Bodega1.jpg'
import bodega2 from '../img/bodega2.jpg'
import bodega3 from '../img/bodega3.webp'
import { useNavigate } from "react-router-dom";



const warehouses = [
  {
    id: 1,
    name: "Bodega 1",
    price: "$120.00",
    image: bodega1, 
    rating: 4.8,
    reviews: 131
  },
  {
    id: 2,
    name: "Bodega 2",
    price: "$60.00",
    image: bodega2, 
    rating: 4.6,
    reviews: 64
  },
  {
    id: 3,
    name: "Bodega 3",
    price: "$24.59",
    image: bodega3, 
    rating: 4.5,
    reviews: 63
  },
];

const PopularStorage = () => {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-14 px-6 text-center">
      {/* Etiqueta superior */}
      <div className="mb-4">
        <span className="bg-[#F5E8FF] text-[#A855F7] text-sm font-medium px-4 py-1 rounded-full">
          BODEGAS POPULARES
        </span>
      </div>

      {/* Título principal */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-16">
        Las ofertas de las bodegas más populares
      </h2>

      {/* Grid de bodegas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {warehouses.map((warehouse) => (
          <div
            key={warehouse.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={warehouse.image}
                alt={warehouse.name}
                className="w-full h-56 object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition">
                <Heart className="w-5 h-5 text-[#FF4D6D]" />
              </button>
            </div>

            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                {warehouse.name}
              </h3>
              <p className="text-[#3B82F6] font-semibold mt-1">
                {warehouse.price}
              </p>

              {/* Calificación */}
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <div className="flex items-center text-[#FFA500]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-500">({warehouse.reviews})</span>
              </div>

              {/* Botón */}
              <button className="mt-5 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition">
                Ver Bodega
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón inferior */}
      <div className="mt-14">
        <button 
        onClick = {()=> {window.scrollTo(0, 0);navigate('/storage')}}
        className="flex items-center gap-2 mx-auto bg-white border border-gray-300 shadow-sm hover:shadow-md px-5 py-2 rounded-lg font-medium text-gray-800 transition">
          Mostrar todas las bodegas
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default PopularStorage;

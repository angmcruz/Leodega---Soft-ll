import { HeaderArrendador } from "../Arrendador/HeaderArrendador";
import SearchBar from "./SearchBar";
import { Heart, Star, ArrowRight } from "lucide-react";
import bodega1 from '../img/Bodega1.jpg'
import bodega2 from '../img/bodega2.jpg'
import bodega3 from '../img/bodega3.webp'

type Warehouse = {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
};

const baseWarehouses: Warehouse[] = [
  { id: 1, name: "Bodega 1", price: "$120.00", image: bodega1, rating: 4.8, reviews: 131 },
  { id: 2, name: "Bodega 2", price: "$60.00", image: bodega2, rating: 4.6, reviews: 64 },
  { id: 3, name: "Bodega 3", price: "$24.59", image: bodega3, rating: 4.5, reviews: 63 },
];

const warehouses: Warehouse[] = Array.from({ length: 9 }, (_, i) => ({
  ...baseWarehouses[i % 3],
  id: i + 1,
}));


const Storage = () => {
  return (

    <section className="w-full min-h-screen bg-white pb-16">
      <HeaderArrendador />


      <div className="flex justify-center mt-6 px-4">
        <div className="w-full max-w-6xl">
          <SearchBar />
        </div>
      </div>


      {/* Grid RESPONSIVE */}
      <div className="max-w-7xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {warehouses.map((warehouse) => (
          <div
            key={warehouse.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={warehouse.image}
                alt={warehouse.name}
                className="w-full h-56 object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                <Heart className="w-5 h-5 text-[#FF4D6D]" />
              </button>
            </div>


            {/* Info */}
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-gray-900">{warehouse.name}</h3>
              <p className="text-[#3B82F6] font-bold text-md mt-1">{warehouse.price}</p>


              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span className="flex items-center text-[#FFA500]">
                  <Star className="w-4 h-4 fill-current" /> {warehouse.rating}
                </span>
                <span className="text-gray-500">({warehouse.reviews})</span>
              </div>


              {/* Botón */}
              <button className="mt-5 flex items-center gap-2 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition w-full justify-center">
                Ver bodega <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Storage;
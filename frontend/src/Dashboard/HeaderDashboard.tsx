import { Bell, ChevronDown } from "lucide-react";
import perfil from '../img/perfil.jpg';
interface HeaderDashboardProps {
  role?: "admin" | "arrendador";
}


export const HeaderDashboard: React.FC<HeaderDashboardProps> = ({ role }) => {
    return (
        <header className="bg-white border-b border-gray-200 px-8 py-3.5 flex items-center justify-between h-[72px]">
        <div className="flex-1 max-w-md">
            <div className="relative">
            <input
                type="text"
                placeholder="Buscar"
                className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            
            </div>
        </div>

        <div className="flex items-center gap-6">
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                9
            </span>
            </button>

            <button className="flex items-center gap-3 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
            <img
                src={perfil}
                className="w-9 h-9 rounded-full object-cover"
            />
            <div className="text-left">
                <p className="text-sm font-medium text-gray-800">Melissa Cruz</p>
                 <p className="text-xs text-gray-500">{role === "admin" ? "Administrador" : "Arrendador"}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
        </div>
        </header>
    );
};

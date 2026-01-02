import { Bell, ChevronDown, Search } from "lucide-react";
import bandera from '../img/bandera.jpg';
import perfil from '../img/perfil.jpg';

export const HeaderArrendador: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-3.5 flex items-center justify-between h-[72px]">
            <div className="flex-1 max-w-md">
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    />
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
                <button className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Search className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                        9
                    </span>
                </button>

                <button className="hidden md:flex items-center gap-2 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
                    <img
                        src={bandera}
                        alt="Español"
                        className="w-7 h-5 rounded object-cover"
                    />
                    <span className="text-gray-700 text-sm font-medium">Español</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                <button className="flex items-center gap-3 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
                    <img
                        src={perfil}
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-medium text-gray-800">Melissa Cruz</p>
                        <p className="text-xs text-gray-500">Arrendador</p>
                    </div>
                    <ChevronDown className="hidden md:block w-4 h-4 text-gray-500" />
                </button>
            </div>
        </header>
    );
};
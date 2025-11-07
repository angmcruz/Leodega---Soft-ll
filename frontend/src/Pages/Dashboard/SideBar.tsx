import { Calendar, MessageSquare, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white h-screen border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 p-6">
        <img
          src="/src/img/LOGO_LEODEGA ISO.png"
          alt="Logo Leodega"
          className="h-10"
        />
        <img
          src="/src/img/LOGO_LEODEGA TEXTO-19.png"
          alt="Leodega"
          className="h-8"
        />
      </div>

      {/* Sección principal */}
      <nav className="flex-1">
        <ul className="text-sm font-medium text-gray-700">
          {/* Activo */}
          <li className="bg-[#FEB42B] text-[#FFFFFF] rounded-r-full pl-6 py-3 cursor-pointer transition-all">
            Bodegas
          </li>

          {/* Otros botones */}
          <li className="hover:bg-gray-100 pl-6 py-3 cursor-pointer transition-all">
            Mensajes
          </li>
          <li className="hover:bg-gray-100 pl-6 py-3 cursor-pointer transition-all">
            Solicitudes
          </li>
        </ul>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 my-6 mx-4"></div>

        {/* Sección Pages */}
        <div className="px-6 text-xs uppercase text-gray-400 font-semibold tracking-wide">
          Pages
        </div>

        <ul className="mt-3 text-sm text-gray-700 font-medium">
          <li className="hover:bg-gray-100 pl-6 py-3 flex items-center gap-2 cursor-pointer transition-all">
            <Calendar size={16} className="text-gray-500" />
            Calendario
          </li>
          <li className="hover:bg-gray-100 pl-6 py-3 flex items-center gap-2 cursor-pointer transition-all">
            <Settings size={16} className="text-gray-500" />
            Settings
          </li>
          <li className="hover:bg-gray-100 pl-6 py-3 flex items-center gap-2 cursor-pointer transition-all">
            <LogOut size={16} className="text-gray-500" />
            Logout
          </li>
        </ul>
      </nav>
    </aside>
  );
}

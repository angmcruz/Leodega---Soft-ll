import React from "react";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from 'react-router-dom';
import logoh1 from "../img/LOGO_H_1.png";
import { Menu } from "lucide-react";

interface SidebarAdminProps {
    readonly activeItem: string;
    readonly setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function SidebarAdmin({ activeItem, setActiveItem }: SidebarAdminProps) {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    return (
        <>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`md:hidden fixed top-[14px] left-1 z-50 p-2 bg-white rounded-md shadow-md transition-opacity duration-300 ${sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} >
                <Menu size={24} />
            </button>

            {sidebarOpen && (
                <div 
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                />
            )}
            <aside className={`fixed md:relative w-[270px] bg-white border-r border-gray-200 flex-col flex-shrink-0 min-h-screen transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-40`}>    <div className="px-6 py-6 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                    <img src={logoh1} alt="Logo" className="h-12" />
                </div>
            </div>

            <nav className="flex-1 py-6">
                <SidebarItem
                    label="Bodegas"
                    active={activeItem === 'bodegas'}
                    onClick={() => { setActiveItem('bodegas'); navigate('/arrendador/bodegas'); }}
                />
                <SidebarItem
                    label="Mensajes"
                    active={activeItem === 'mensajes'}
                    onClick={() => { setActiveItem('mensajes'); navigate('/mensajes'); }}
                />
                <SidebarItem
                    label="Solicitudes"
                    active={activeItem === 'solicitudes'}
                    onClick={() => { setActiveItem('solicitudes'); navigate('/solicitudes'); }}
                />
                

                <div className="mt-8 mb-3 px-6">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Páginas
                    </p>
                </div>

                <SidebarItem
                    label="Calendario"
                    active={activeItem === 'calendario'}
                    onClick={() => { setActiveItem('calendario'); navigate('/calendario'); }}
                />
                <SidebarItem
                    label="Configuración"
                    active={activeItem === 'settings'}
                    onClick={() => { setActiveItem('settings'); navigate('/settings'); }}
                />
                <SidebarItem
                    label="Cerrar sesión"
                    active={activeItem === 'logout'}
                    onClick={() => { 
                        localStorage.removeItem('auth_user');
                        localStorage.removeItem('auth_token');
                        setActiveItem('logout'); 
                        navigate('/login'); }}
                />
            </nav>
        </aside>
        </>
    );
}
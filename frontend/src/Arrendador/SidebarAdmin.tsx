import React from "react";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from 'react-router-dom';

interface SidebarAdminProps {
    readonly activeItem: string;
    readonly setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function SidebarAdmin({ activeItem, setActiveItem }: SidebarAdminProps) {
    const navigate = useNavigate();
    return (
        <aside className="w-[270px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 min-h-screen">
            <div className="px-6 py-6 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                    <img src="/src/img/LOGO_H_1.png" alt="Logo" className="h-12" />
                </div>
            </div>

            <nav className="flex-1 py-6">
                <SidebarItem
                    label="Bodegas"
                    active={activeItem === 'bodegas'}
                    onClick={() => { setActiveItem('bodegas'); navigate('/bodegas'); }}
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
                        PAGES
                    </p>
                </div>

                <SidebarItem
                    label="Calendario"
                    active={activeItem === 'calendario'}
                    onClick={() => { setActiveItem('calendario'); navigate('/calendario'); }}
                />
                <SidebarItem
                    label="Settings"
                    active={activeItem === 'settings'}
                    onClick={() => { setActiveItem('settings'); navigate('/settings'); }}
                />
                <SidebarItem
                    label="Logout"
                    active={activeItem === 'logout'}
                    onClick={() => { setActiveItem('logout'); navigate('/login'); }}
                />
            </nav>
        </aside>
    );
}
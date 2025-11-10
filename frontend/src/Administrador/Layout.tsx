import { useEffect, useState } from "react";
import type { LayoutRouteProps } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { HeaderArrendador } from "./HeaderArrendador";
import SidebarAdmin from "./SidebarAdmin";
const Layout: React.FC<LayoutRouteProps> = ({ children }) => {
    const [activeItem, setActiveItem] = useState('bodegas');
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname.toLowerCase();
        if (path.startsWith('/bodegas')) setActiveItem('bodegas');
        else if (path.startsWith('/admin/mensajes')) setActiveItem('mensajes');
        else if (path.startsWith('/admin/solicitudes')) setActiveItem('solicitudes');
        else if (path.startsWith('/admin/calendario')) setActiveItem('calendario');
        else if (path.startsWith('/admin/settings')) setActiveItem('settings');
        else if (path.startsWith('/login')) setActiveItem('logout');
    }, [location.pathname]);

    
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <SidebarAdmin activeItem={activeItem} setActiveItem={setActiveItem} />
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                <HeaderArrendador />
                <main className="flex-1 overflow-auto bg-gray-50 relative z-30">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
import { useEffect, useState } from "react";

import { useLocation } from 'react-router-dom';

import { HeaderArrendador } from "./HeaderArrendador";
import SidebarAdmin from "./SidebarAdmin";

interface LayoutProps {
    children: React.ReactNode;
    role?: "admin" | "arrendador";
}



const Layout: React.FC<LayoutProps> = ({ children, role }) => {
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
            <SidebarAdmin
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                role={role}
            />
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                <HeaderArrendador role={role} />
                <main className="flex-1 overflow-auto bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
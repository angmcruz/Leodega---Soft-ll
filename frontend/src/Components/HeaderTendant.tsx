import { Bell, LogOut, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from '../img/LOGO_H_1.png';
import { Link } from "react-router-dom";

const HeaderTendant = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userLastName, setUserLastName] = useState("");
    
    const toggleNabbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    
    useEffect(() => {
        const userData = localStorage.getItem('auth_user');
        if (userData) {
            try {
                const user = JSON.parse(userData);
                setUserName(user.name);
                setUserLastName(user.lastname);
            } catch (error) {
                console.error('Error al parsear usuario:', error);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
    };
    
    const navItems = [
        { label: "Bodegas populares", href: "/storage", path: "/storage" },
        { label: "Mensajes", href: "/arrendatario/mensajes", path: "/arrendatario/mensajes" },
        { label: "Calendario", href: "/arrendatario/calendario", path: "/arrendatario/calendario" }
    ];

    return (
        <nav className="sticky top-0 z-50 py-5 px-12 backdrop-blur-lg border-b border-neutral-300 bg-white">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/arrendatario/dashboard" className="flex items-center">
                            <img className="h-10 w-50 mr-2" src={logo} alt="logo" />
                        </Link>
                    </div>
                    
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <div className="py-2 px-5 rounded-md text-white bg-leodega_p text-center flex items-center justify-center space-x-2">
                            <User className="w-6 h-6" />
                            <div className="pl-3 flex flex-col items-start">
                                <span className="text-sm font-medium">{userName || "Usuario"}</span>
                                {userLastName && (
                                    <span className="text-xs opacity-90">{userLastName}</span>
                                )}
                            </div>
                        </div>
                        <div>
                            <Bell size={22} />
                        </div>
                        <Link to="/login" onClick={handleLogout} className="text-center">
                            <LogOut className="inline-block mr-2" size={22} />
                        </Link>
                    </div>
                    
                    <div className="lg:hidden flex items-center space-x-4">
                        <div className="py-1 px-2 rounded-md text-white bg-leodega_p text-center text-sm">
                            <div>{userName || "Usuario"}</div>
                            <div className="text-xs">{userLastName || ""}</div>
                        </div>
                        
                        <button onClick={toggleNabbar}>
                            {mobileDrawerOpen ? <X color='black' /> : <Menu color='black' />}
                        </button>
                    </div>
                </div>
                
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-white w-full flex flex-col justify-center items-center space-y-6 lg:hidden pt-4 pb-6">
                        <div className="py-2 px-3 rounded-md text-white bg-leodega_p w-40 text-center mb-4">
                            <div>{userName || "Usuario"}</div>
                            <div className="text-sm">{userLastName || ""}</div>
                        </div>
                        
                        <ul className="flex flex-col items-center space-y-6 w-full">
                            {navItems.map((item, index) => (
                                <li key={index} className='py-2 w-full text-center border-b'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default HeaderTendant;
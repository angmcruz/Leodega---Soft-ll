import React, { useState } from 'react';
import { User, Bell, Lock, CreditCard, Globe, Shield, Mail, Phone, MapPin, Camera, Menu } from 'lucide-react';

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState('perfil');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [notificaciones, setNotificaciones] = useState({
        emailReservas: true,
        emailMensajes: true,
        pushReservas: true,
        pushMensajes: false,
        emailReportes: true,
    });

    const tabs = [
        { id: 'perfil', nombre: 'Perfil', icono: User },
        { id: 'notificaciones', nombre: 'Notificaciones', icono: Bell },
        { id: 'seguridad', nombre: 'Seguridad', icono: Lock },
        { id: 'pagos', nombre: 'Pagos', icono: CreditCard },
        { id: 'privacidad', nombre: 'Privacidad', icono: Shield },
    ];

    return (
        <div className="px-4 lg:pl-8 lg:pr-8 pt-5 bg-[#f5f6fa] min-h-screen">
            <div className="mb-6 mt-3">
                <h1 className="text-2xl font-semibold text-gray-900">Configuración</h1>
                <p className="text-gray-600 mt-1">Administra tu cuenta y preferencias</p>
            </div>

            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 w-full justify-center"
                >
                    <Menu size={16} />
                    {showMobileMenu ? 'Ocultar Menú' : 'Mostrar Menú'}
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className={`
                    ${showMobileMenu ? 'block' : 'hidden lg:block'}
                    w-full lg:w-64 bg-white rounded-lg shadow-sm p-4
                `}>
                    <nav className="space-y-2">
                        {tabs.map((tab) => {
                            const Icon = tab.icono;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        if (window.innerWidth < 1024) {
                                            setShowMobileMenu(false);
                                        }
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        activeTab === tab.id
                                            ? 'bg-purple-50 text-purple-600 font-medium'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <Icon size={20} />
                                    <span>{tab.nombre}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex-1 bg-white rounded-lg shadow-sm p-4 lg:p-6">
                    {activeTab === 'perfil' && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Información Personal</h2>
                                
                                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                                    <div className="relative">
                                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-100 rounded-full flex items-center justify-center">
                                            <User size={32} className="text-purple-600 lg:w-10 lg:h-10" />
                                        </div>
                                        <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700">
                                            <Camera size={14} className="lg:w-4 lg:h-4" />
                                        </button>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <button className="text-purple-600 font-medium hover:text-purple-700 text-sm lg:text-base">
                                            Cambiar foto
                                        </button>
                                        <p className="text-xs lg:text-sm text-gray-500 mt-1">JPG, PNG o GIF (máx. 2MB)</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Leonardo"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Castro"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                        />
                                    </div>
                                    <div className="lg:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <Mail size={16} className="inline mr-2" />
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue="leancast@espol.edu.ec"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <Phone size={16} className="inline mr-2" />
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            defaultValue="+593 99 123 4567"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <MapPin size={16} className="inline mr-2" />
                                            Ciudad
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Guayaquil"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium text-sm lg:text-base">
                                        Guardar Cambios
                                    </button>
                                    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm lg:text-base">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notificaciones' && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Preferencias de Notificaciones</h2>
                                <p className="text-gray-600 mb-6">Elige cómo quieres recibir notificaciones</p>

                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b gap-3">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">Notificaciones de Reservas por Email</h3>
                                            <p className="text-sm text-gray-500">Recibe emails cuando alguien reserva tu bodega</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notificaciones.emailReservas}
                                                onChange={(e) => setNotificaciones({...notificaciones, emailReservas: e.target.checked})}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b gap-3">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">Notificaciones Push de Reservas</h3>
                                            <p className="text-sm text-gray-500">Recibe notificaciones push instantáneas</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notificaciones.pushReservas}
                                                onChange={(e) => setNotificaciones({...notificaciones, pushReservas: e.target.checked})}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b gap-3">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">Mensajes de Usuarios por Email</h3>
                                            <p className="text-sm text-gray-500">Recibe emails cuando te envíen mensajes</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notificaciones.emailMensajes}
                                                onChange={(e) => setNotificaciones({...notificaciones, emailMensajes: e.target.checked})}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b gap-3">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">Reportes Mensuales</h3>
                                            <p className="text-sm text-gray-500">Resumen de tus bodegas y ganancias</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notificaciones.emailReportes}
                                                onChange={(e) => setNotificaciones({...notificaciones, emailReportes: e.target.checked})}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'seguridad' && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Seguridad de la Cuenta</h2>
                                
                                <div className="space-y-6">
                                    <div className="border rounded-lg p-4">
                                        <h3 className="font-medium text-gray-900 mb-4">Cambiar Contraseña</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Contraseña Actual
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nueva Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Confirmar Nueva Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                                                />
                                            </div>
                                            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium text-sm lg:text-base">
                                                Actualizar Contraseña
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg p-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div>
                                                <h3 className="font-medium text-gray-900">Autenticación de Dos Factores</h3>
                                                <p className="text-sm text-gray-500 mt-1">Añade una capa extra de seguridad</p>
                                            </div>
                                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium text-sm lg:text-base w-full sm:w-auto">
                                                Activar
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg p-4">
                                        <h3 className="font-medium text-gray-900 mb-4">Sesiones Activas</h3>
                                        <div className="space-y-3">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-2">
                                                <div className="flex items-center gap-3">
                                                    <Globe size={20} className="text-gray-400" />
                                                    <div>
                                                        <p className="font-medium text-gray-900 text-sm lg:text-base">Chrome en Windows</p>
                                                        <p className="text-sm text-gray-500">Guayaquil, Ecuador • Ahora</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm text-green-600 font-medium">Actual</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'pagos' && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Pago</h2>
                                <p className="text-gray-600 mb-6">Administra cómo recibes tus pagos</p>

                                <button className="mb-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium text-sm lg:text-base w-full sm:w-auto">
                                    + Agregar Cuenta Bancaria
                                </button>

                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                                    <CreditCard size={48} className="mx-auto text-gray-400 mb-3" />
                                    <p className="text-gray-600">No tienes métodos de pago configurados</p>
                                    <p className="text-sm text-gray-500 mt-1">Agrega una cuenta bancaria para recibir pagos</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'privacidad' && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacidad y Datos</h2>
                                
                                <div className="space-y-4">
                                    <div className="border rounded-lg p-4">
                                        <h3 className="font-medium text-gray-900 mb-2">Visibilidad del Perfil</h3>
                                        <p className="text-sm text-gray-500 mb-4">Controla quién puede ver tu información</p>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm lg:text-base">
                                            <option>Público</option>
                                            <option>Solo usuarios registrados</option>
                                            <option>Privado</option>
                                        </select>
                                    </div>

                                    <div className="border rounded-lg p-4">
                                        <h3 className="font-medium text-gray-900 mb-2">Descargar mis Datos</h3>
                                        <p className="text-sm text-gray-500 mb-4">Obtén una copia de tu información</p>
                                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm lg:text-base w-full sm:w-auto">
                                            Solicitar Datos
                                        </button>
                                    </div>

                                    <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                                        <h3 className="font-medium text-red-900 mb-2">Eliminar Cuenta</h3>
                                        <p className="text-sm text-red-600 mb-4">Esta acción es permanente y no se puede deshacer</p>
                                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-sm lg:text-base w-full sm:w-auto">
                                            Eliminar Cuenta
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
import React, { useState } from 'react';
import { Search, ChevronDown, Bell, User, Mail, Phone, MapPin, Calendar, Clock, DollarSign, ArrowLeft } from 'lucide-react';
import type { SolicitudDetallada, SolicitudTabla } from './Interfaces/SolicitudesData';


//DATA A ELIMINAR CON LA DATA REAL, SOLO POR MOTIVOS DE DESARROLLO
const solicitudesDetalladasJSON: Record<number, SolicitudDetallada> = {
    1: {
        id: 1,
        titulo: 'Nueva Solicitud de Reserva',
        tiempo: 'Hace 5 minutos',
        estado: 'Completada',
        cliente: {
        nombre: 'Christine Brooks',
        estado: 'Cliente Verificado',
        avatar: 'CB',
        email: 'christine.brooks@email.com',
        telefono: '+57 300 111 2222'
        },
        detallesReserva: {
        bodega: 'Bodega Centro Logístico Sur',
        ubicacion: '089 Kutch Green Apt. 448',
        area: '200 m²',
        duracion: '6 meses',
        inicio: '04 Sep 2019',
        fin: '04 Mar 2020'
        },
        informacionFinanciera: {
        arriendoMensual: '$3.000.000',
        deposito: '$3.000.000',
        totalEstimado: '$18.000.000'
        }
    },
    2: {
        id: 2,
        titulo: 'Reporte de Bodega',
        tiempo: 'Hace 2 horas',
        estado: 'En proceso',
        cliente: {
        nombre: 'Rosie Pearson',
        estado: 'Cliente Premium',
        avatar: 'RP',
        email: 'rosie.pearson@email.com',
        telefono: '+57 301 222 3333'
        },
        detallesReserva: {
        bodega: 'Bodega Industrial Este',
        ubicacion: '979 Immanuel Ferry Suite 526',
        area: '180 m²',
        duracion: '4 meses',
        inicio: '28 May 2019',
        fin: '28 Sep 2019'
        },
        informacionFinanciera: {
        arriendoMensual: '$2.800.000',
        deposito: '$2.800.000',
        totalEstimado: '$11.200.000'
        }
    },
    3: {
        id: 3,
        titulo: 'Solicitud de Bodega',
        tiempo: 'Hace 1 día',
        estado: 'Rechazada',
        cliente: {
        nombre: 'Darrell Caldwell',
        estado: 'Cliente Regular',
        avatar: 'DC',
        email: 'darrell.caldwell@email.com',
        telefono: '+57 302 333 4444'
        },
        detallesReserva: {
        bodega: 'Bodega Norte Express',
        ubicacion: '8587 Frida Ports',
        area: '120 m²',
        duracion: '2 meses',
        inicio: '23 Nov 2019',
        fin: '23 Jan 2020'
        },
        informacionFinanciera: {
        arriendoMensual: '$2.000.000',
        deposito: '$2.000.000',
        totalEstimado: '$4.000.000'
        }
    },
    4: {
        id: 4,
        titulo: 'Reporte de Usuario',
        tiempo: 'Hace 3 días',
        estado: 'Completada',
        cliente: {
        nombre: 'Gilbert Johnston',
        estado: 'Cliente VIP',
        avatar: 'GJ',
        email: 'gilbert.johnston@email.com',
        telefono: '+57 303 444 5555'
        },
        detallesReserva: {
        bodega: 'Bodega Premium Center',
        ubicacion: '768 Destiny Lake Suite 600',
        area: '250 m²',
        duracion: '12 meses',
        inicio: '05 Feb 2019',
        fin: '05 Feb 2020'
        },
        informacionFinanciera: {
        arriendoMensual: '$4.000.000',
        deposito: '$4.000.000',
        totalEstimado: '$48.000.000'
        }
    },
    5: {
        id: 5,
        titulo: 'Aceptar Usuario',
        tiempo: 'Hace 5 horas',
        estado: 'En proceso',
        cliente: {
        nombre: 'Alan Cain',
        estado: 'Cliente Nuevo',
        avatar: 'AC',
        email: 'alan.cain@email.com',
        telefono: '+57 304 555 6666'
        },
        detallesReserva: {
        bodega: 'Bodega Zona Franca',
        ubicacion: '042 Mylene Throughway',
        area: '300 m²',
        duracion: '8 meses',
        inicio: '29 Jul 2019',
        fin: '29 Mar 2020'
        },
        informacionFinanciera: {
        arriendoMensual: '$3.500.000',
        deposito: '$3.500.000',
        totalEstimado: '$28.000.000'
        }
    },
    6: {
        id: 6,
        titulo: 'Reporte de Usuario',
        tiempo: 'Hace 2 días',
        estado: 'Completada',
        cliente: {
        nombre: 'Alfred Murray',
        estado: 'Cliente Verificado',
        avatar: 'AM',
        email: 'alfred.murray@email.com',
        telefono: '+57 305 666 7777'
        },
        detallesReserva: {
        bodega: 'Bodega Logística Central',
        ubicacion: '543 Weimann Mountain',
        area: '175 m²',
        duracion: '5 meses',
        inicio: '15 Aug 2019',
        fin: '15 Jan 2020'
        },
        informacionFinanciera: {
        arriendoMensual: '$2.700.000',
        deposito: '$2.700.000',
        totalEstimado: '$13.500.000'
        }
    },
    7: {
        id: 7,
        titulo: 'Solicitud de Bodega',
        tiempo: 'Hace 6 horas',
        estado: 'En proceso',
        cliente: {
        nombre: 'Maggie Sullivan',
        estado: 'Cliente Premium',
        avatar: 'MS',
        email: 'maggie.sullivan@email.com',
        telefono: '+57 306 777 8888'
        },
        detallesReserva: {
        bodega: 'Bodega Industrial Oeste',
        ubicacion: 'New Scottlieberg',
        area: '220 m²',
        duracion: '7 meses',
        inicio: '21 Dec 2019',
        fin: '21 Jul 2020'
        },
        informacionFinanciera: {
        arriendoMensual: '$3.200.000',
        deposito: '$3.200.000',
        totalEstimado: '$22.400.000'
        }
    },
    8: {
        id: 8,
        titulo: 'Solicitud de Bodega',
        tiempo: 'Hace 12 horas',
        estado: 'En espera',
        cliente: {
        nombre: 'Rosie Todd',
        estado: 'Cliente Regular',
        avatar: 'RT',
        email: 'rosie.todd@email.com',
        telefono: '+57 307 888 9999'
        },
        detallesReserva: {
        bodega: 'Bodega Comercial Norte',
        ubicacion: 'New Jon',
        area: '140 m²',
        duracion: '3 meses',
        inicio: '30 Apr 2019',
        fin: '30 Jul 2019'
        },
        informacionFinanciera: {
        arriendoMensual: '$2.300.000',
        deposito: '$2.300.000',
        totalEstimado: '$6.900.000'
        }
    },
    9: {
        id: 9,
        titulo: 'Reporte de Bodega',
        tiempo: 'Hace 8 horas',
        estado: 'En proceso',
        cliente: {
        nombre: 'Dollie Hines',
        estado: 'Cliente Verificado',
        avatar: 'DH',
        email: 'dollie.hines@email.com',
        telefono: '+57 308 999 0000'
        },
        detallesReserva: {
        bodega: 'Bodega Metropolitana',
        ubicacion: '124 Lyla Forge Suite 975',
        area: '190 m²',
        duracion: '4 meses',
        inicio: '09 Jan 2019',
        fin: '09 May 2019'
        },
        informacionFinanciera: {
        arriendoMensual: '$2.900.000',
        deposito: '$2.900.000',
        totalEstimado: '$11.600.000'
        }
    }
    };

const Solicitudes: React.FC = () => {
    const [vistaActual, setVistaActual] = useState<'lista' | 'detalle'>('lista');
    const [solicitudSeleccionada, setSolicitudSeleccionada] = useState<SolicitudDetallada | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Newest');
    const [filtroFecha, setFiltroFecha] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');

    const solicitudesTabla: SolicitudTabla[] = [
        { id: 1, nombre: 'Christine Brooks', direccion: '089 Kutch Green Apt. 448', fecha: '04 Sep 2019', tipo: 'Solicitud Bodega', estado: 'Completada' },
        { id: 2, nombre: 'Rosie Pearson', direccion: '979 Immanuel Ferry Suite 526', fecha: '28 May 2019', tipo: 'Reporte Bodega', estado: 'En proceso' },
        { id: 3, nombre: 'Darrell Caldwell', direccion: '8587 Frida Ports', fecha: '23 Nov 2019', tipo: 'Solicitud Bodega', estado: 'Rechazada' },
        { id: 4, nombre: 'Gilbert Johnston', direccion: '768 Destiny Lake Suite 600', fecha: '05 Feb 2019', tipo: 'Reporte Usuario', estado: 'Completada' },
        { id: 5, nombre: 'Alan Cain', direccion: '042 Mylene Throughway', fecha: '29 Jul 2019', tipo: 'Aceptar Usuario', estado: 'En proceso' },
        { id: 6, nombre: 'Alfred Murray', direccion: '543 Weimann Mountain', fecha: '15 Aug 2019', tipo: 'Reporte Usuario', estado: 'Completada' },
        { id: 7, nombre: 'Maggie Sullivan', direccion: 'New Scottlieberg', fecha: '21 Dec 2019', tipo: 'Solicitud Bodega', estado: 'En proceso' },
        { id: 8, nombre: 'Rosie Todd', direccion: 'New Jon', fecha: '30 Apr 2019', tipo: 'Solicitud Bodega', estado: 'En espera' },
        { id: 9, nombre: 'Dollie Hines', direccion: '124 Lyla Forge Suite 975', fecha: '09 Jan 2019', tipo: 'Reporte Bodega', estado: 'En proceso' },
    ];

    const totalPages = 5;

    const reiniciarFiltros = () => {
        setFiltroFecha('');
        setFiltroTipo('');
        setFiltroEstado('');
    };

    const abrirDetalleSolicitud = (id: number) => {
        const detalles = solicitudesDetalladasJSON[id];
        if (detalles) {
        setSolicitudSeleccionada(detalles);
        setVistaActual('detalle');
        }
    };

    const volverALista = () => {
        setVistaActual('lista');
        setSolicitudSeleccionada(null);
    };

    if (vistaActual === 'lista') {
        return (
        <div className="pl-8 pt-5 pr-8">
            <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Solicitudes</h1>
            </div>

            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Filtrar por:</span>
                <select 
                value={filtroFecha}
                onChange={(e) => setFiltroFecha(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                <option value="">Fecha</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                </select>
                <select 
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                <option value="">Tipo de Solic.</option>
                <option value="Solicitud Bodega">Solicitud Bodega</option>
                <option value="Reporte Bodega">Reporte Bodega</option>
                <option value="Reporte Usuario">Reporte Usuario</option>
                <option value="Aceptar Usuario">Aceptar Usuario</option>
                </select>
                <select 
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                <option value="">Estado</option>
                <option value="Completada">Completada</option>
                <option value="En proceso">En proceso</option>
                <option value="Rechazada">Rechazada</option>
                <option value="En espera">En espera</option>
                </select>
                <button 
                onClick={reiniciarFiltros}
                className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                Reiniciar Filtro
                </button>
            </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Short by:</span>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <span className="text-sm font-medium">{sortBy}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">NOMBRE</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DIRECCIÓN</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">FECHA</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">TIPO</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ESTADO</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {solicitudesTabla.map((solicitud) => (
                    <tr 
                    key={solicitud.id} 
                    onClick={() => abrirDetalleSolicitud(solicitud.id)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.id.toString().padStart(5, '0')}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.nombre}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.direccion}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.fecha}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{solicitud.tipo}</td>
                    <td className="px-6 py-4">
                        <span
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-md ${
                            solicitud.estado === 'Completada'
                            ? 'bg-green-100 text-green-700'
                            : solicitud.estado === 'En proceso'
                            ? 'bg-yellow-100 text-yellow-700'
                            : solicitud.estado === 'Rechazada'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                        >
                        {solicitud.estado}
                        </span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                Showing data 1 to 8 of {solicitudesTabla.length} entries
                </div>
                <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded hover:bg-gray-100">&lt;</button>
                <button className="px-3 py-1 bg-purple-600 text-white rounded">1</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">4</button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 rounded hover:bg-gray-100">{totalPages}</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">&gt;</button>
                </div>
            </div>
            </div>
        </div>
        );
    }

    if (vistaActual === 'detalle' && solicitudSeleccionada) {
        return (
        <div className="pl-8 pt-5 pr-8 bg-gray-50 min-h-screen">
            <div className="mb-6 flex items-center gap-4">
            <button
                onClick={volverALista}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver a Solicitudes</span>
            </button>
            </div>

            <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Solicitudes</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                <Bell className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    {solicitudSeleccionada.titulo}
                </h2>
                <p className="text-sm text-gray-500">{solicitudSeleccionada.tiempo}</p>
                </div>
            </div>

            <div className="mb-6">
                <span className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded">
                {solicitudSeleccionada.estado}
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Información del Cliente</h3>
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">{solicitudSeleccionada.cliente.avatar}</span>
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">{solicitudSeleccionada.cliente.nombre}</p>
                    <p className="text-sm text-gray-500">{solicitudSeleccionada.cliente.estado}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{solicitudSeleccionada.cliente.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{solicitudSeleccionada.cliente.telefono}</span>
                    </div>
                </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Detalles de la Reserva</h3>
                </div>
                <div className="space-y-4">
                    <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">BODEGA</p>
                    <p className="font-semibold text-gray-900">{solicitudSeleccionada.detallesReserva.bodega}</p>
                    <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <p className="text-sm text-gray-600">{solicitudSeleccionada.detallesReserva.ubicacion}</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">ÁREA</p>
                        <p className="font-semibold text-gray-900">{solicitudSeleccionada.detallesReserva.area}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">DURACIÓN</p>
                        <p className="font-semibold text-gray-900">{solicitudSeleccionada.detallesReserva.duracion}</p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Inicio: {solicitudSeleccionada.detallesReserva.inicio}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Fin: {solicitudSeleccionada.detallesReserva.fin}</span>
                    </div>
                    </div>
                </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Información Financiera</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Arriendo mensual:</span>
                    <span className="font-semibold text-gray-900">{solicitudSeleccionada.informacionFinanciera.arriendoMensual}</span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Depósito:</span>
                    <span className="font-semibold text-gray-900">{solicitudSeleccionada.informacionFinanciera.deposito}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total estimado:</span>
                        <span className="text-xl font-bold text-gray-900">{solicitudSeleccionada.informacionFinanciera.totalEstimado}</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Acciones Requeridas</h3>
                <div className="flex gap-4 mb-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Revisar y Responder
                </button>
                <button className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors">
                    Ver Dashboard
                </button>
                </div>
                <p className="text-sm text-gray-600">
                Tienes 24 horas para responder a esta solicitud. Después de este tiempo, la solicitud expirará automáticamente.
                </p>
            </div>
            </div>
        </div>
        );
    }
    return null;
};

export default Solicitudes;
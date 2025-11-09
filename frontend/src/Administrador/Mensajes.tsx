import React, { useState } from 'react';
import { Search, MoreVertical, Paperclip, Send, Star, Trash2, AlertCircle, Inbox, Mail, PenTool } from 'lucide-react';

type Categoria = 'inbox' | 'favoritos' | 'enviados' | 'redactar' | 'spam' | 'importante' | 'eliminados';

const Mensajes: React.FC = () => {
    const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('inbox');
    const [mensajeSeleccionado, setMensajeSeleccionado] = useState<number | null>(1);
    const [mensajeTexto, setMensajeTexto] = useState('');

    //data quemada temporalmente, hasta definir el contenido de Mensajes.tsx definitivamente
    const todosMensajes = [
        {
            id: 1,
            nombre: 'Melissa Cruz',
            asunto: 'Consulta sobre Bodega Industrial Norte',
            preview: 'Hola, estoy interesada en rentar la bodega para almacenamiento...',
            tiempo: '10:30 AM',
            leido: false,
            avatar: 'MC',
            mensajeCompleto: 'Hola, estoy interesada en rentar la bodega para almacenamiento de productos textiles. ¿Podrías darme más información sobre las medidas de seguridad y el horario de acceso?',
            categorias: ['inbox', 'importante']
        },
        {
            id: 2,
            nombre: 'Andrés Bohórquez',
            asunto: 'Renovación de contrato',
            preview: 'Quiero renovar el contrato de la bodega por 6 meses más...',
            tiempo: 'Ayer',
            leido: true,
            avatar: 'AB',
            mensajeCompleto: 'Quiero renovar el contrato de la bodega por 6 meses más. ¿Es posible mantener el mismo precio?',
            categorias: ['inbox', 'favoritos']
        },
        {
            id: 3,
            nombre: 'Jair Chaguay',
            asunto: 'Problema con acceso',
            preview: 'Tengo un problema para acceder a la bodega...',
            tiempo: '2 días',
            leido: true,
            avatar: 'JC',
            mensajeCompleto: 'Tengo un problema para acceder a la bodega. La puerta no abre con mi código.',
            categorias: ['inbox', 'importante']
        },
        {
            id: 4,
            nombre: 'María González',
            asunto: 'Gracias por el servicio',
            preview: 'Excelente atención, todo muy bien...',
            tiempo: '3 días',
            leido: true,
            avatar: 'MG',
            mensajeCompleto: 'Excelente atención, todo muy bien organizado. Gracias por el servicio profesional.',
            categorias: ['enviados']
        },
        {
            id: 5,
            nombre: 'Carlos Pérez',
            asunto: 'Oferta especial - 50% descuento',
            preview: 'Aprovecha nuestra oferta limitada...',
            tiempo: '1 semana',
            leido: true,
            avatar: 'CP',
            mensajeCompleto: 'Aprovecha nuestra oferta limitada de 50% en todos los servicios. ¡No te lo pierdas!',
            categorias: ['spam']
        },
        {
            id: 6,
            nombre: 'Admin Sistema',
            asunto: 'Confirmación de reserva',
            preview: 'Tu reserva ha sido confirmada exitosamente...',
            tiempo: '4 días',
            leido: true,
            avatar: 'AS',
            mensajeCompleto: 'Tu reserva ha sido confirmada exitosamente. El código de acceso te será enviado 24h antes.',
            categorias: ['importante', 'favoritos']
        },
        {
            id: 7,
            nombre: 'Juan Torres',
            asunto: 'Mensaje antiguo',
            preview: 'Este es un mensaje que fue eliminado...',
            tiempo: '2 semanas',
            leido: true,
            avatar: 'JT',
            mensajeCompleto: 'Este es un mensaje que fue eliminado pero aún puedes recuperarlo.',
            categorias: ['eliminados']
        },
        {
            id: 8,
            nombre: 'Laura Sánchez',
            asunto: 'Consulta de horarios',
            preview: '¿Cuál es el horario de atención?',
            tiempo: '5 días',
            leido: false,
            avatar: 'LS',
            mensajeCompleto: '¿Cuál es el horario de atención para visitar las bodegas? Necesito ir esta semana.',
            categorias: ['inbox', 'favoritos']
        },
    ];

    const mensajesFiltrados = todosMensajes.filter(mensaje => 
        mensaje.categorias.includes(categoriaActiva)
    );

    const mensajeActual = mensajesFiltrados.find(m => m.id === mensajeSeleccionado);

    const categorias = [
        { id: 'inbox' as Categoria, nombre: 'Inbox', icono: Inbox, count: todosMensajes.filter(m => m.categorias.includes('inbox')).length },
        { id: 'favoritos' as Categoria, nombre: 'Favoritos', icono: Star, count: todosMensajes.filter(m => m.categorias.includes('favoritos')).length },
        { id: 'enviados' as Categoria, nombre: 'Enviados', icono: Send, count: todosMensajes.filter(m => m.categorias.includes('enviados')).length },
        { id: 'redactar' as Categoria, nombre: 'Redactar', icono: PenTool, count: 0 },
        { id: 'spam' as Categoria, nombre: 'Spam', icono: AlertCircle, count: todosMensajes.filter(m => m.categorias.includes('spam')).length },
        { id: 'importante' as Categoria, nombre: 'Importante', icono: Mail, count: todosMensajes.filter(m => m.categorias.includes('importante')).length },
        { id: 'eliminados' as Categoria, nombre: 'Eliminados', icono: Trash2, count: todosMensajes.filter(m => m.categorias.includes('eliminados')).length },
    ];

    const handleCategoriaClick = (categoria: Categoria) => {
        setCategoriaActiva(categoria);
        const primeraCategoria = todosMensajes.find(m => m.categorias.includes(categoria));
        setMensajeSeleccionado(primeraCategoria ? primeraCategoria.id : null);
    };

    return (
        <div className="pl-8 pt-5 pr-8 bg-[#f5f6fa] min-h-screen ">
            <div className="mb-6 mt-3">
                <h1 className="text-2xl font-semibold text-gray-900">Mensajes</h1>
            </div>

            <div className="flex gap-6 h-[700px] pb-3">
                <div className="w-64 bg-white rounded-lg shadow-sm p-4 flex flex-col">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg mb-6 transition-colors">
                        + Nuevo Mensaje
                    </button>

                    <div className="mb-6">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">My Email</h3>
                        <div className="space-y-1">
                            {categorias.map((cat) => {
                                const Icon = cat.icono;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleCategoriaClick(cat.id)}
                                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                                            categoriaActiva === cat.id
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon size={16} />
                                            <span>{cat.nombre}</span>
                                        </div>
                                        <span className={`text-xs ${
                                            categoriaActiva === cat.id ? 'text-blue-600' : 'text-gray-500'
                                        }`}>
                                            {cat.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Label</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded">
                                <input type="checkbox" className="w-4 h-4 text-cyan-500 rounded" />
                                <span>Primary</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded">
                                <input type="checkbox" className="w-4 h-4 text-cyan-500 rounded" />
                                <span>Social</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded">
                                <input type="checkbox" className="w-4 h-4 text-cyan-500 rounded" />
                                <span>Work</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded">
                                <input type="checkbox" className="w-4 h-4 text-cyan-500 rounded" />
                                <span>Friends</span>
                            </label>
                            <button className="w-full text-left text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5">
                                + Create New Label
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-96 bg-white rounded-lg shadow-sm flex flex-col">
                    <div className="p-4 border-b">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar mensajes..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {mensajesFiltrados.length > 0 ? (
                            mensajesFiltrados.map((mensaje) => (
                                <div
                                    key={mensaje.id}
                                    onClick={() => setMensajeSeleccionado(mensaje.id)}
                                    className={`p-4 border-b cursor-pointer transition-colors ${
                                        mensajeSeleccionado === mensaje.id
                                            ? 'bg-blue-50 border-l-4 border-l-blue-500'
                                            : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                                            mensaje.leido ? 'bg-gray-400' : 'bg-blue-500'
                                        }`}>
                                            {mensaje.avatar}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className={`font-semibold text-sm ${
                                                    mensaje.leido ? 'text-gray-700' : 'text-gray-900'
                                                }`}>
                                                    {mensaje.nombre}
                                                </h3>
                                                <span className="text-xs text-gray-500">{mensaje.tiempo}</span>
                                            </div>
                                            <p className={`text-sm mb-1 ${
                                                mensaje.leido ? 'text-gray-600' : 'text-gray-900 font-medium'
                                            }`}>
                                                {mensaje.asunto}
                                            </p>
                                            <p className="text-xs text-gray-500 truncate">{mensaje.preview}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                                <div className="text-center">
                                    <Mail size={48} className="mx-auto mb-3 opacity-50" />
                                    <p>No hay mensajes en esta categoría</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1 bg-white rounded-lg shadow-sm flex flex-col">
                    {mensajeActual ? (
                        <>
                            <div className="p-4 border-b">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                                            {mensajeActual.avatar}
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-lg text-gray-900">{mensajeActual.nombre}</h2>
                                            <p className="text-sm text-gray-500">Para: mí</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <Star size={20} className="text-gray-400" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <MoreVertical size={20} className="text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-medium text-gray-900">{mensajeActual.asunto}</h3>
                                <p className="text-xs text-gray-500 mt-1">{mensajeActual.tiempo}</p>
                            </div>

                            <div className="flex-1 p-6 overflow-y-auto">
                                <p className="text-gray-700 leading-relaxed">
                                    {mensajeActual.mensajeCompleto}
                                </p>
                            </div>

                            <div className="p-4 border-t">
                                <div className="flex items-end gap-3">
                                    <div className="flex-1">
                                        <textarea
                                            value={mensajeTexto}
                                            onChange={(e) => setMensajeTexto(e.target.value)}
                                            placeholder="Escribe tu respuesta..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                            rows={3}
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                                            <Paperclip size={20} className="text-gray-600" />
                                        </button>
                                        <button className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                                            <Send size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            <div className="text-center">
                                <Mail size={64} className="mx-auto mb-4 opacity-50" />
                                <p className="text-lg">Selecciona un mensaje para leer</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mensajes;
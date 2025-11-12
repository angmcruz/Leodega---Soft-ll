
export interface Cliente {
    nombre: string;
    estado: string;
    avatar: string;
    email: string;
    telefono: string;
}

export interface DetallesReserva {
    bodega: string;
    ubicacion: string;
    area: string;
    duracion: string;
    inicio: string;
    fin: string;
}

export interface InformacionFinanciera {
    arriendoMensual: string;
    deposito: string;
    totalEstimado: string;
}

export interface SolicitudDetallada {
    id: number;
    titulo: string;
    tiempo: string;
    estado: string;
    cliente: Cliente;
    detallesReserva: DetallesReserva;
    informacionFinanciera: InformacionFinanciera;
}


export interface Solicitud {
    id: number;
    nombre: string;
    direccion: string;
    fecha: string;
    tipo: string;
    estado: 'Completada' | 'En proceso' | 'Rechazada' | 'En espera';
}

export interface Bodega {
    id: number;
    nameBodega: string;
    bodega: number;
    phoneNumber: string;
    email: string;
    country: string;
    status: 'Active' | 'Inactive';
}

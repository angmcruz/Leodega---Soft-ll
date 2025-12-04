import React from "react";
import { Search, Mail, Phone, Shield, Wifi, Video, Truck, Car, Ruler } from "lucide-react";

export default function LeodegaUI() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-md" />
          <span className="font-semibold text-lg">leodega</span>
        </div>
        <div className="relative w-1/3 hidden md:block">
          <input
            className="w-full border rounded-xl px-4 py-2 pl-10 shadow-sm"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <div className="flex items-center gap-4">
          <span>Spanish</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="col-span-2 md:col-span-1 h-48 bg-gray-300 rounded-xl" />
            <div className="h-48 bg-gray-300 rounded-xl" />
            <div className="h-48 bg-gray-300 rounded-xl" />
            <div className="h-48 bg-gray-300 rounded-xl" />
            <div className="h-48 bg-gray-300 rounded-xl" />
          </div>

          {/* Price */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-600">$425 USD mensual</h2>
            <p className="text-gray-600">300 m² · Altura 6 metros</p>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-orange-400 text-white rounded-lg">Reportar</button>
              <button className="px-4 py-2 bg-orange-200 text-gray-800 rounded-lg">Reservar</button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Descripción</h3>
            <p>Amplia bodega con excelentes 24/7 buena seguridad excelente sector industrial, centro de la ciudad.</p>
          </div>

          {/* Features */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Características</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Feature icon={<Ruler />} label="300 m²" />
              <Feature icon={<Car />} label="Estacionamiento" />
              <Feature icon={<Shield />} label="Seguridad 24/7" />
              <Feature icon={<Wifi />} label="Internet" />
              <Feature icon={<Video />} label="CCTV" />
              <Feature icon={<Truck />} label="Muelle de carga" />
            </div>
          </div>

          {/* Additional Images */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Imágenes Adicionales</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-gray-300 rounded-xl" />
              <div className="h-40 bg-gray-300 rounded-xl" />
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Especificaciones Técnicas</h3>
            <ul className="space-y-2">
              <Spec label="Dimensiones" value="20m x 15m" />
              <Spec label="Altura" value="6 metros" />
              <Spec label="Tipo de suelo" value="Concreto industrial" />
              <Spec label="Puertas" value="2 Puertas industriales" />
              <Spec label="Iluminación" value="LED industrial" />
              <Spec label="Ventilación" value="Natural y forzada" />
            </ul>
          </div>
        </div>

        {/* Right Column: Contact */}
        <div className="space-y-6">
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <div className="w-20 h-20 bg-purple-300 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Eduardo Vallajo</h3>
            <p className="text-gray-500 text-sm">5 Opiniones</p>
            <button className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Llamar Ahora
            </button>
            <button className="w-full mt-2 px-4 py-2 border border-purple-400 text-purple-500 rounded-lg flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" /> Enviar Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
      <span className="text-purple-600">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between border-b pb-1">
      <span className="font-medium">{label}</span>
      <span>{value}</span>
    </li>
  );
}

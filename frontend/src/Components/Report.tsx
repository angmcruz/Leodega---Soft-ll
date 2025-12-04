import React, { useState } from "react";
import { Upload, AlertTriangle, ArrowLeft } from "lucide-react";

export default function Report() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-sm">
        {/* Back */}
        <button className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5" /> Volver al inicio
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-orange-500 w-6 h-6" />
          <div>
            <h1 className="text-xl font-semibold">Reportar Incidente</h1>
            <p className="text-gray-500 text-sm">
              Complete el formulario con toda la información y evidencia disponible
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Tipo de incidente */}
          <div>
            <label className="font-medium">Tipo de incidente *</label>
            <select className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50">
              <option>Seleccione el tipo de incidente</option>
            </select>
          </div>

          {/* Nivel de urgencia */}
          <div>
            <label className="font-medium">Nivel de urgencia *</label>
            <select className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50">
              <option>Media</option>
              <option>Alta</option>
              <option>Baja</option>
            </select>
          </div>

          {/* Título */}
          <div>
            <label className="font-medium">Título del incidente *</label>
            <input
              type="text"
              placeholder="Resumen breve del problema"
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Proporcione un título claro y descriptivo
            </p>
          </div>

          {/* Ubicación */}
          <div>
            <label className="font-medium">Ubicación específica *</label>
            <input
              type="text"
              placeholder="Ej: Bodega A, Sector 3, Pasillo 2"
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Sea lo más específico posible sobre la ubicación
            </p>
          </div>

          {/* Descripción */}
          <div>
            <label className="font-medium">Descripción detallada *</label>
            <textarea
              placeholder="Describa qué sucedió, cuándo ocurrió, y cualquier información relevante..."
              className="mt-1 w-full border rounded-lg px-3 py-2 h-28"
            />
            <p className="text-xs text-gray-500 mt-1">
              Incluya todos los detalles relevantes (mínimo 20 caracteres)
            </p>
          </div>

          {/* Evidencia */}
          <div className="border border-dashed rounded-xl p-6 text-center bg-gray-50">
            <input type="file" multiple className="hidden" id="fileUpload" onChange={handleFileUpload} />
            <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center">
              <Upload className="w-10 h-10 text-gray-400" />
              <p className="mt-2 text-gray-600">Haga clic para cargar archivos o arrastre aquí</p>
              <p className="text-xs text-gray-500">Imágenes, PDF, DOC (Máximo 10MB por archivo)</p>
            </label>

            {files.length > 0 && (
              <div className="mt-4 text-left">
                <p className="font-medium mb-1">Archivos seleccionados:</p>
                <ul className="text-sm text-gray-600 list-disc ml-6">
                  {files.map((file, i) => (
                    <li key={i}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Note */}
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-gray-700">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <p>
              Asegúrese de que toda la información sea precisa y completa. Los incidentes críticos
              requieren evidencia fotográfica.
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium">
            Enviar reporte de incidente
          </button>
        </form>
      </div>
    </div>
  );
}

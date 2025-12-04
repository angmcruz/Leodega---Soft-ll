import React, { useState } from "react";
import { ChevronLeft, Info, MessageSquare } from "lucide-react";

interface IncidentResolutionDecisionProps {
  incidentId: string;
  proposedResolution: string;
  onBack?: () => void;
  onResolve?: (comments: string) => void;
  onReject?: (comments: string) => void;
}

export default function Resolution({
  incidentId,
  proposedResolution,
  onBack,
  onResolve,
  onReject,
}: IncidentResolutionDecisionProps) {
  const [comments, setComments] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-600 mb-4"
        >
          <ChevronLeft className="w-5 h-5" /> Volver al inicio
        </button>

        <div className="bg-white border rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Decisión sobre Resolución del Incidente
          </h2>

          <p className="text-sm text-gray-600 mb-4">Incidente: {incidentId}</p>

          {/* Aviso */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md flex gap-3 text-sm text-blue-900 mb-6">
            <Info className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium">El incidente ha sido resuelto por el administrador.</p>
              <p className="mt-1">
                Por favor, confirme si está de acuerdo con la resolución propuesta o si considera que el
                problema persiste.
              </p>
            </div>
          </div>

          {/* Resolución propuesta */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Resolución propuesta:</h3>
            <div className="bg-gray-100 border rounded-md p-4 text-sm text-gray-700">
              {proposedResolution}
            </div>
          </div>

          {/* Comentarios */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Comentarios adicionales (opcional)
            </h3>
            <div className="flex items-start gap-2">
              <MessageSquare className="w-5 h-5 text-gray-400" />
              <textarea
                className="w-full border rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                placeholder="Proporcione cualquier comentario sobre la resolución o el servicio recibido..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-4">
            <button
              onClick={() => onResolve?.(comments)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium"
            >
              Marcar como resuelto
            </button>
            <button
              onClick={() => onReject?.(comments)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-medium"
            >
              Cerrar sin solución
            </button>
          </div>

          {/* Nota */}
          <p className="mt-6 text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold">Nota:</span> Si marca como resuelto, el incidente se cerrará definitivamente.
            Si elige "Cerrar sin solución", el incidente se archivará y podrá reportarlo de nuevo si el problema persiste.
          </p>
        </div>
      </div>
    </div>
  );
}

// Ejemplo de uso
export const ExampleIncidentDecisionPage = () => (
  <Resolution
    incidentId="INC-1754968403392"
    proposedResolution="El problema reportado ha sido identificado y solucionado. Se han tomado las medidas correctivas necesarias para evitar que vuelva a ocurrir."
    onBack={() => window.history.back()}
    onResolve={(c) => alert("Marcado como resuelto. Comentarios: " + c)}
    onReject={(c) => alert("Cerrado sin solución. Comentarios: " + c)}
  />
);
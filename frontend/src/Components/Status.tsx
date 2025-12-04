import React from "react";
import { ChevronLeft, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export type StepState = "completed" | "active" | "pending";

export type Step = {
    id: string;
    title: string;
    state: StepState;
};

type IncidentStatusProps = {
    incidentId: string;
    createdAt: string; // ISO string or formatted
    statusLabel?: string;
    steps: Step[];
    onBack?: () => void;
    onReportAnother?: () => void;
};

export default function Status({
    incidentId,
    createdAt,
    statusLabel = "Submitted",
    steps,
    onBack,
    onReportAnother,
}: IncidentStatusProps) {
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
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">Estado del Incidente</h2>
                            <p className="text-sm text-gray-500 mt-1">Seguimiento en tiempo real de su reporte</p>

                            <div className="flex items-center gap-3 mt-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                                    {statusLabel.toUpperCase()}
                                </span>

                                <span className="text-sm text-gray-500">{new Date(createdAt).toLocaleString()}</span>
                            </div>

                            <div className="mt-4 p-4 border rounded-md bg-gray-50 text-sm text-gray-700">
                                <div className="flex items-center gap-3">
                                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                    <div>
                                        Incidente <span className="font-medium">{incidentId}</span> reportado exitosamente. Se ha enviado notificación al administrador.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-right"></div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Proceso del incidente:</h3>

                        <ol className="space-y-3">
                            {steps.map((s) => (
                                <li key={s.id} className="flex items-start gap-4">
                                    <StepMarker state={s.state} />
                                    <div>
                                        <div className={`text-sm font-medium ${s.state === 'active' ? 'text-purple-600' : s.state === 'completed' ? 'text-green-600' : 'text-gray-500'}`}>
                                            {s.title}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={onReportAnother}
                                className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Reportar otro incidente
                            </button>

                            <button className="px-4 py-2 rounded-md text-sm font-medium bg-purple-600 text-white shadow-sm hover:brightness-95">
                                Volver al inicio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StepMarker({ state }: { state: StepState }) {
    if (state === "completed") {
        return (
            <div className="flex-shrink-0 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-green-500 inline-flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                </div>
            </div>
        );
    }

    if (state === "active") {
        return (
            <div className="flex-shrink-0 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 inline-flex items-center justify-center ring-2 ring-white shadow">
                    <Clock className="w-3 h-3 text-white" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex-shrink-0 mt-0.5">
            <div className="w-4 h-4 rounded-full bg-gray-200" />
        </div>
    );
}

// ---------------------------
// Example usage (for a page):
// ---------------------------

export const ExamplePage = () => {
    const steps: Step[] = [
        { id: "1", title: "Incidente reportado", state: "completed" },
        { id: "2", title: "En proceso de revisión", state: "completed" },
        { id: "3", title: "Incidente clasificado", state: "completed" },
        { id: "4", title: "Analizando evidencia", state: "active" },
        { id: "5", title: "Evidencia validada", state: "pending" },
        { id: "6", title: "Incidente resuelto", state: "pending" },
        { id: "7", title: "Incidente rechazado", state: "pending" },
    ];

    return (
        <Status
            incidentId="INC-1754968389375"
            createdAt={new Date().toISOString()}
            statusLabel="Submitted"
            steps={steps}
            onBack={() => window.history.back()}
            onReportAnother={() => alert('Reportar otro')}
        />
    );
};


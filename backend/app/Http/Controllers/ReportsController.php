<?php

namespace App\Http\Controllers;

use App\Models\Reports;
use App\Models\StoreRooms;
use App\Models\ReportEvidence;
use Illuminate\Http\Request;

class ReportsController extends ApiController
{
    //
    public function index()
    {
        return $this->indexModel(Reports::class);
    }

    public function show($id)
    {
        return $this->showModel(Reports::class, $id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'store_id' => 'required|exists:storeRooms,id',
            'title' => 'required|string|max:255',
            'report_type' => 'required|string|max:255',
            'priority' => 'required|in:low,medium,high',
            'description' => 'required|string|min:20',
            'files.*' => 'file|max:10240',
        ]);

        $report = Reports::create([
            'user_id' => auth()->user()?->id,
            'store_id' => $request->store_id,
            'title' => $request->title,
            'priority' => $request->priority,
            'report_type' => $request->report_type,
            'description' => $request->description,
        ]);

        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $path = $file->store('reports', 'public');

                $report->evidences()->create([
                    'file_path' => $path,
                    'file_type' => $file->getClientMimeType(),
                ]);
            }
        }

        return response()->json([
            'message' => 'Reporte creado correctamente',
            'report' => $report
        ], 201);
    }


    public function update(Request $request, $id)
    {
        $rules = [
            'store_id' => 'sometimes|exists:storeRooms,id',
            'reported_user_id' => 'nullable|exists:users,id',
            'title' => 'sometimes|string|max:255',
            'report_type' => 'sometimes|string|max:255',
            'priority' => 'sometimes|in:low,medium,high',
            'description' => 'sometimes|string|min:20',
            'status' => 'sometimes|in:pending,in_review,resolved',
        ];

        return $this->updateModel($request, Reports::class, $id, $rules);
    }

    public function destroy($id)
    {
        return $this->destroyModel(Reports::class, $id);
    }
}

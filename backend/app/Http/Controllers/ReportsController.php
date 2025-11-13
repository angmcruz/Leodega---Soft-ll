<?php

namespace App\Http\Controllers;

use App\Models\Reports;
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
        $rules = [
            'user_id' => 'required|exists:user,id',
            'report_type' => 'required|string|max:255',
            'description' => 'required|string',
            'report_date' => 'sometimes|date',
            'status' => 'sometimes|in:pending,in_review,resolved',
        ];

        return $this->storeModel($request, Reports::class, $rules);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'user_id' => 'sometimes|exists:user,id',
            'report_type' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'report_date' => 'sometimes|date',
            'status' => 'sometimes|in:pending,in_review,resolved',
        ];

        return $this->updateModel($request, Reports::class, $id, $rules);
    }

    public function destroy($id)
    {
        return $this->destroyModel(Reports::class, $id);
    }
}

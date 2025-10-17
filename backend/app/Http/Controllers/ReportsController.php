<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reports;

class ReportsController extends ApiController
{
    //
     public function index(){
        return $this->indexModel(Reports::class);
    }

    public function show($id){
        return $this->showModel(Reports::class, $id);
    }

    public function store(Request $request){
        $rules = [
            'user_id' => 'required|exists:user,id',
            'report_type' => 'required|string|max:255',
            'description' => 'required|string',
            'report_date' => 'date',
            'status' => 'in:pending,in_review,resolved',
        ];
        return $this->storeModel($request, Reports::class, $rules);
        
    }


    public function update(Request $request, $id){
        $rules = [
            'user_id' => 'exists:user,id',
            'report_type' => 'string|max:255',
            'description' => 'string',
            'report_date' => 'date',
            'status' => 'in:pending,in_review,resolved',
        ];
        return $this->updateModel($request, Reports::class, $id, $rules);
    }

    public function destroy($id){
        return $this->destroyModel(Reports::class, $id);
    }
}

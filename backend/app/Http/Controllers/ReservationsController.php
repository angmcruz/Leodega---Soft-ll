<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservations;

class ReservationsController extends ApiController
{
    //
    public function index(){
        return $this->indexModel(Reservations::class);
    }

    public function show($id){
        return $this->showModel(Reservations::class, $id);
    }

    public function store(Request $request){
        $rules = [
            'store_room_id' => 'required|exists:store_rooms,id',
            'tenant_id' => 'required|exists:tenants,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'status' => 'in:pending,confirmed,canceled',
            'total_mount' => 'nullable|numeric',
            'cancelation_reason' => 'nullable|string',
            'creation_date' => 'dateTime'
        ];
        return $this->storeModel($request, Reservations::class, $rules);
    }


    public function update(Request $request, $id){
        $rules = [
            'store_room_id' => 'exists:store_rooms,id',
            'tenant_id' => 'exists:tenants,id',
            'start_date' => 'date',
            'end_date' => 'date|after_or_equal:start_date',
            'status' => 'in:pending,confirmed,canceled',
            'total_mount' => 'nullable|numeric',
            'cancelation_reason' => 'nullable|string',
            'creation_date' => 'dateTime'
        ];
        return $this->updateModel($request, Reservations::class, $id, $rules);
    }

    public function destroy($id){
        return $this->destroyModel(Reservations::class, $id);
    }
}

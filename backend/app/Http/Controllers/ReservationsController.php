<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservations;

class ReservationsController extends ApiController
{
    //
    public function index()
    {
        return $this->indexModel(Reservations::class);
    }

    public function show($id)
    {
        return $this->showModel(Reservations::class, $id);
    }

    public function store(Request $request)
    {
        $rules = [
            'store_room_id' => 'required|exists:storeRooms,id',
            'tenant_id' => 'required|exists:tenants,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'status' => 'in:pending,confirmed,canceled',
            'total_mount' => 'numeric|min:0',
            'cancelation_reason' => 'required|string',
            'creation_date' => 'date'
        ];
        return $this->storeModel($request, Reservations::class, $rules);
    }


    public function update(Request $request, $id)
    {
        $rules = [
            'store_room_id' => 'sometimes|exists:storeRooms,id',
            'tenant_id' => 'sometimes|exists:tenants,id',
            'start_date' => 'sometimes|date',
            'end_date' => 'sometimes|date|after_or_equal:start_date',
            'status' => 'sometimes|in:pending,confirmed,canceled',
            'total_mount' => 'sometimes|numeric',
            'cancelation_reason' => 'sometimes|string',
            'creation_date' => 'date'
        ];
        return $this->updateModel($request, Reservations::class, $id, $rules);
    }

    public function destroy($id)
    {
        return $this->destroyModel(Reservations::class, $id);
    }
}

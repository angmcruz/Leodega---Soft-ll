<?php

namespace App\Http\Controllers;

use App\Models\Landlords;
use Illuminate\Http\Request;
use App\Models\StoreRooms;

class storeRoomsController extends ApiController
{
    public function index(){
        return $this->indexModel(StoreRooms::class);
    }

    public function show($id){
        return $this->showModel(StoreRooms::class, $id);
    }

    public function store(Request $request){
        $rules = [
            'landlord_id' => 'required|exists:landlords,id',
            'room_type' => 'required|in:habitacion,garaje,contenedor,sotano,atico',
            'storage_type'=> 'required|in:completa,privado,compartido',
            'direction' => 'required|string',
            'city' => 'required|string',
            'geographical_zone' => 'required|string',
            'size' => 'required|numeric',
            'title'=> 'required|string',
            'description' => 'required|string',
            'security'=>'required|string',
            'publication_status' => 'in:pending,approved,rejected',
            'publication_date' => 'date',
        ];
        return $this->storeModel($request, StoreRooms::class, $rules);
    }


    public function update(Request $request, $id){
        $rules = [
            'landlord_id' => 'exists:landlords,id',
            'room_type' => 'in:habitacion,garaje,contenedor,sotano,atico',
            'storage_type' => 'in:complet,privado,compartido',
            'direction' => 'string',
            'city' => 'string',
            'geographical_zone' => 'string',
            'size' => 'numeric',
            'title'=> 'string',
            'description' => 'string',
            'security'=>'string',
            'publication_status' => 'in:pending,approved,rejected',
            'publication_date' => 'date',
        ];
        return $this->updateModel($request, StoreRooms::class, $id, $rules);
    }

    public function destroy($id){
        return $this->destroyModel(StoreRooms::class, $id);
    }

    public function getByLandlord($landlordId)
    {
        $landlord = Landlords::with('storeRooms')->find($landlordId);

        if (!$landlord) {
            return response()->json(['message' => 'Landlord no encontrado'], 404);
        }

        return response()->json($landlord->storeRooms, 200);
    }
}

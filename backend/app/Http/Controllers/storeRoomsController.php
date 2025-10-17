<?php

namespace App\Http\Controllers;

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
            'direction' => 'required|string',
            'city' => 'required|string',
            'geographical_zone' => 'required|string',
            'size' => 'required|numeric',
            'description' => 'required|string',
            'publication_status' => 'in:pending,approved,rejected',
            'publication_date' => 'date',
        ];
        return $this->storeModel($request, StoreRooms::class, $rules);
    }


    public function update(Request $request, $id){
        $rules = [
            'landlord_id' => 'exists:landlords,id',
            'direction' => 'string',
            'city' => 'string',
            'geographical_zone' => 'string',
            'size' => 'numeric',
            'description' => 'string',
            'publication_status' => 'in:pending,approved,rejected',
            'publication_date' => 'date',
        ];
        return $this->updateModel($request, StoreRooms::class, $id, $rules);
    }

    public function destroy($id){
        return $this->destroyModel(StoreRooms::class, $id);
    }
}

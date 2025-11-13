<?php

namespace App\Http\Controllers;

use App\Models\StorePhoto;
use Illuminate\Http\Request;

class StorePhotoController extends ApiController
{
    //
    public function index()
    {
        return $this->indexModel(StorePhoto::class);
    }

    public function show($id)
    {
        return $this->showModel(StorePhoto::class, $id);
    }

    public function store(Request $request)
    {
        $rules = [
            'store_room_id' => 'required|exists:storeRooms,id',
            'photo_url' => 'required|string|max:255',
        ];

        return $this->storeModel($request, StorePhoto::class, $rules);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'store_room_id' => 'sometimes|exists:storeRooms,id',
            'photo_url' => 'sometimes|string|max:255',
        ];

        return $this->updateModel($request, StorePhoto::class, $id, $rules);
    }

    public function destroy($id)
    {
        return $this->destroyModel(StorePhoto::class, $id);
    }
}

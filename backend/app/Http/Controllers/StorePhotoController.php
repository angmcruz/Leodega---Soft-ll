<?php

namespace App\Http\Controllers;

use App\Models\StorePhoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


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

    public function upload(Request $request)
    {
        $request->validate([
            'store_room_id' => 'required|exists:storeRooms,id',
            'photos' => 'required|array|min:5|max:10',
            'photos.*' => 'image|mimes:jpg,jpeg,png,webp|max:5120', // 5MB
        ]);

        $savedPhotos = [];

        foreach ($request->file('photos') as $photo) {
            $filename = Str::uuid() . '.' . $photo->getClientOriginalExtension();

            $path = $photo->storeAs(
                'store-rooms',
                $filename,
                'public'
            );

            $savedPhotos[] = StorePhoto::create([
                'store_room_id' => $request->store_room_id,
                'photo_url' => $path,
            ]);
        }

        return response()->json([
            'message' => 'Fotos subidas correctamente',
            'photos' => $savedPhotos,
        ], 201);
    }


    public function destroy($id)
    {
        return $this->destroyModel(StorePhoto::class, $id);
    }
}

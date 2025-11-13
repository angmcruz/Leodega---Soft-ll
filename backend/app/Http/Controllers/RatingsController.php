<?php

namespace App\Http\Controllers;

use App\Models\Ratings;
use Illuminate\Http\Request;

class RatingsController extends ApiController
{
    public function index()
    {
        return $this->indexModel(Ratings::class);
    }

    public function show($id)
    {
        return $this->showModel(Ratings::class, $id);
    }

    public function store(Request $request)
    {
        $rules = [
            'store_id' => 'required|exists:storeRooms,id',
            'user_id' => 'required|exists:user,id',
            'stars' => 'required|integer|between:1,5',
            'comment' => 'required|string',
        ];
        return $this->storeModel($request, Ratings::class, $rules);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'store_id' => 'sometimes|exists:storeRooms,id',
            'user_id' => 'sometimes|exists:user,id',
            'stars' => 'sometimes|integer|between:1,5',
            'comment' => 'sometimes|string',
        ];
        return $this->updateModel($request, Ratings::class, $id, $rules);
    }

    public function destroy($id)
    {
        return $this->destroyModel(Ratings::class, $id);
    }
}

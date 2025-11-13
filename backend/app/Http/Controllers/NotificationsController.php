<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use Illuminate\Http\Request;

class NotificationsController extends ApiController
{
    //
    public function index()
    {
        return $this->indexModel(Notifications::class);
    }

    public function show($id)
    {
        return $this->showModel(Notifications::class, $id);
    }

    public function store(Request $request)
    {
        $rules = [
            'reservation_id' => 'required|exists:reservations,id',
            'emisor_id' => 'required|exists:user,id',
            'receptor_id' => 'required|exists:user,id',
            'message' => 'required|string|max:500',
        ];

        return $this->storeModel($request, Notifications::class, $rules);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'reservation_id' => 'sometimes|exists:reservations,id',
            'emisor_id' => 'sometimes|exists:user,id',
            'receptor_id' => 'sometimes|exists:user,id',
            'message' => 'sometimes|string|max:500',
        ];

        return $this->updateModel($request, Notifications::class, $id, $rules);
    }

    public function destroy($id)
    {
        return $this->destroyModel(Notifications::class, $id);
    }
}

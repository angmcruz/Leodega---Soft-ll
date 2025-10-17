<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends ApiController
{
    public function index(){
        return $this->indexModel(User::class);
    }

    public function show($id){
        return $this->showModel(User::class, $id);
    }

    public function store(Request $request){
        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:user',
            'password' => 'required|string|min:8',
            'role' => 'in:admin,landlord,tenant',
            'start_date' => 'date|default:now()',
            'state' => 'in:active,blocked,pending',
            'enable_messages' => 'required|boolean'
        ];
        return $this->storeModel($request, User::class, $rules);
    }


    public function update(Request $request, $id){
        $rules = [
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:user,email,'.$id,
            'password' => 'sometimes|required|string|min:8',
            'role' => 'sometimes|in:admin,landlord,tenant',
            'start_date' => 'sometimes|date|nullable',
            'state' => 'sometimes|in:active,blocked,pending',
            'enable_messages' => 'sometimes|boolean'
        ];
        return $this->updateModel($request, User::class, $id, $rules);
    }

    public function destroy($id){
        return $this->destroyModel(User::class, $id);
    }


    //
}

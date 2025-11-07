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
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:user',
            'phone'=> 'required|string|unique:user|max:10',
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
            'lastname' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:user,email,'.$id,
            'phone'=> 'sometimes|required|string|unique:user,phone,'.$id.'|max:10',
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

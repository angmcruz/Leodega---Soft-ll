<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    //
    protected function indexModel(string $modelClass){
        $items = $modelClass::all();
        if($items->isEmpty()){
            return response()->json(['message' => 'No items found', "status"=>404], 404);
        }
        return response()->json($items, 200);
    }

    protected function showModel(string $modelClass, $id){
        $item = $modelClass::find($id);
        if(!$item){
            return response()->json(['message' => 'Item not found', "status"=>404], 404);
        }
        return response()->json($item, 200);
    }

    protected function storeModel(Request $request, string $modelClass, array $rules){
        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            $data=[
                'message'=>'Validation Error',
                'errors'=>$validator->errors(),
                'status'=>400
            ];
            return response()->json($data, 400);
        }

        $item = $modelClass::create($request->all());

        if(!$item){
            return response()->json(['message' => 'Item not created', "status"=>500], 500);
        }
        $data = ['item'=>$item,
                'message'=>'Item created successfully',
                'status'=>201];
        return response()->json($data, 201);
    }

    protected function updateModel(Request $request, string $modelClass, $id, array $rules)
    {
        $item = $modelClass::find($id);
        if (!$item) {
            return response()->json(['message' => 'Not found', 'status' => 404], 404);
        }

        // Asegurar "sometimes" para reglas cuando se usan en update
        $rules = array_map(function ($r) {
            if (stripos($r, 'sometimes') === false && stripos($r, 'required') === false) {
                return 'sometimes|' . $r;
            }
            return $r;
        }, $rules);

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['message' => 'Validation Error', 'errors' => $validator->errors(), 'status' => 400], 400);
        }

        $item->update($validator->validated());
        return response()->json(['data' => $item, 'message' => 'Updated', 'status' => 200], 200);
    }

    protected function destroyModel(string $modelClass, $id){
        $item = $modelClass::find($id);
        if(!$item){
            return response()->json(['message' => 'Item not found', "status"=>404], 404);
        }
        $item->delete();
        return response()->json(['message' => 'Item deleted successfully', "status"=>200], 200);
    }

}

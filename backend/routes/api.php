<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', function(){});
Route::get('/users/{id}', function(){});
Route::post('/users', function(){});
Route::put('/users/{id}', function(){}); 
Route::delete('/users/{id}', function(){});

Route::get('/landlords', function(){});
Route::get('/landlords/{id}', function(){});
Route::post('/landlords', function(){});
Route::put('/landlords/{id}', function(){});
Route::delete('/landlords/{id}', function(){});

Route::get('/tenants', function(){});
Route::get('/tenants/{id}', function(){});
Route::post('/tenants', function(){});
Route::put('/tenants/{id}', function(){});
Route::delete('/tenants/{id}', function(){});
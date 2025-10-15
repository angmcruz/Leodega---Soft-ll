<?php

use App\Http\Controllers\FavoritesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\LandlordsController;
use App\Http\Controllers\StoreDisponibilityController;
use App\Http\Controllers\StorePhotoController;
use App\Http\Controllers\storePricesController;
use App\Http\Controllers\storeRoomsController;
use App\Http\Controllers\TenantsController;

Route::get('/user', [UserController::class, 'index']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::post('/user', [UserController::class, 'store']);
Route::put('/user/{id}', [UserController::class, 'update']); 
Route::delete('/user/{id}', [UserController::class, 'destroy']);

Route::get('/landlords', [LandlordsController::class, 'index']);
Route::get('/landlords/{id}', [LandlordsController::class, 'show']);
Route::post('/landlords', [LandlordsController::class, 'store']);
Route::put('/landlords/{id}', [LandlordsController::class, 'update']);
Route::delete('/landlords/{id}', [LandlordsController::class, 'destroy']);

Route::get('/tenants', [TenantsController::class, 'index']);
Route::get('/tenants/{id}', [TenantsController::class, 'show']);
Route::post('/tenants', [TenantsController::class, 'store']);
Route::put('/tenants/{id}', [TenantsController::class, 'update']);
Route::delete('/tenants/{id}', [TenantsController::class, 'destroy']);

Route::get('/storeRooms', [storeRoomsController::class, 'index']);
Route::get('/storeRooms/{id}', [storeRoomsController::class, 'show']);
Route::post('/storeRooms', [storeRoomsController::class, 'store']);
Route::put('/storeRooms/{id}', [storeRoomsController::class, 'update']);
Route::delete('/storeRooms/{id}', [storeRoomsController::class, 'destroy']);

Route::get('/storePrices', [storePricesController::class, 'index']);
Route::get('/storePrices/{id}', [storePricesController::class, 'show']);
Route::post('/storePrices', [storePricesController::class, 'store']);
Route::put('/storePrices/{id}', [storePricesController::class, 'update']);
Route::delete('/storePrices/{id}', [storePricesController::class, 'destroy']);

Route::get('/storePhoto', [StorePhotoController::class, 'index']);
Route::get('/storePhoto/{id}', [StorePhotoController::class, 'show']);
Route::post('/storePhoto', [StorePhotoController::class, 'store']);
Route::put('/storePhoto/{id}', [StorePhotoController::class, 'update']);
Route::delete('/storePhoto/{id}', [StorePhotoController::class, 'destroy']);

Route::get('/favorites', [FavoritesController::class, 'index']);
Route::get('/favorites/{id}', [FavoritesController::class, 'show']);
Route::post('/favorites', [FavoritesController::class, 'store']);
Route::put('/favorites/{id}', [FavoritesController::class, 'update']);
Route::delete('/favorites/{id}', [FavoritesController::class, 'destroy']);

Route::get('/storeDisponibility', [StoreDisponibilityController::class, 'index']);
Route::get('/storeDisponibility/{id}', [StoreDisponibilityController::class, 'show']);
Route::post('/storeDisponibility', [StoreDisponibilityController::class, 'store']);
Route::put('/storeDisponibility/{id}', [StoreDisponibilityController::class, 'update']);
Route::delete('/storeDisponibility/{id}', [StoreDisponibilityController::class, 'destroy']);


Route::get('/reservations', [StoreDisponibilityController::class, 'index']);
Route::get('/reservations/{id}', [StoreDisponibilityController::class, 'show']);
Route::post('/reservations', [StoreDisponibilityController::class, 'store']);
Route::put('/reservations/{id}', [StoreDisponibilityController::class, 'update']);
Route::delete('/reservations/{id}', [StoreDisponibilityController::class, 'destroy']);



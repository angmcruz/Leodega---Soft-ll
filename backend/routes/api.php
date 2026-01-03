<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CancelationsPolicesController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\LandlordsController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\RatingsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\StoreDisponibilityController;
use App\Http\Controllers\StoreModerationController;
use App\Http\Controllers\StorePhotoController;
use App\Http\Controllers\storePricesController;
use App\Http\Controllers\storeRoomsController;
use App\Http\Controllers\TenantsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::post('/forgot-password', [PasswordResetController::class, 'sendResetLink']);
Route::post('/reset-password', [PasswordResetController::class, 'resetPassword']);

Route::middleware('auth.api:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

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
Route::get('/landlords/{id}/storeRooms', [storeRoomsController::class, 'getByLandlord']);

Route::get('/admin', [AdminController::class, 'index']);
Route::get('/admin/{id}', [AdminController::class, 'show']);
Route::post('/admin', [AdminController::class, 'store']);
Route::put('/admin/{id}', [AdminController::class, 'update']);
Route::delete('/admin/{id}', [AdminController::class, 'destroy']);

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

Route::get('/store-rooms/{storeRoom}/photos', [StorePhotoController::class, 'index']);
Route::post('/store-rooms/{storeRoom}/photos', [StorePhotoController::class, 'store']);
Route::get('/store-rooms/{id}/detail', [StoreRoomsController::class, 'detail']);


Route::delete('/store-rooms/{storeRoom}/photos/{photo}', [StorePhotoController::class, 'destroy']);


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

Route::get('/payments', [PaymentsController::class, 'index']);
Route::get('/payments/{id}', [PaymentsController::class, 'show']);
Route::post('/payments', [PaymentsController::class, 'store']);
Route::put('/payments/{id}', [PaymentsController::class, 'update']);
Route::delete('/payments/{id}', [PaymentsController::class, 'destroy']);

Route::get('/notifications', [NotificationsController::class, 'index']);
Route::get('/notifications/{id}', [NotificationsController::class, 'show']);
Route::post('/notifications', [NotificationsController::class, 'store']);
Route::put('/notifications/{id}', [NotificationsController::class, 'update']);
Route::delete('/notifications/{id}', [NotificationsController::class, 'destroy']);

Route::middleware('auth.api:sanctum')->group(function () {
    Route::get('/ratings', [RatingsController::class, 'index']);
    Route::post('/ratings', [RatingsController::class, 'store']);
});

Route::get('/ratings/{id}', [RatingsController::class, 'show']);

Route::put('/ratings/{id}', [RatingsController::class, 'update']);
Route::delete('/ratings/{id}', [RatingsController::class, 'destroy']);

Route::get('/cancelations_polices', [CancelationsPolicesController::class, 'index']);
Route::get('/cancelations_polices/{id}', [CancelationsPolicesController::class, 'show']);
Route::post('/cancelations_polices', [CancelationsPolicesController::class, 'store']);
Route::put('/cancelations_polices/{id}', [CancelationsPolicesController::class, 'update']);
Route::delete('/cancelations_polices/{id}', [CancelationsPolicesController::class, 'destroy']);

Route::get('/reports', [ReportsController::class, 'index']);
Route::get('/reports/{id}', [ReportsController::class, 'show']);
Route::middleware('auth.api:sanctum')->group(function () {
    Route::post('/reports', [ReportsController::class, 'store']);
});
Route::put('/reports/{id}', [ReportsController::class, 'update']);
Route::delete('/reports/{id}', [ReportsController::class, 'destroy']);

// Route::resource('reports', ReportsController::class)->except('create', 'edit');

Route::get('/store_moderation', [StoreModerationController::class, 'index']);
Route::get('/store_moderation/{id}', [StoreModerationController::class, 'show']);
Route::post('/store_moderation', [StoreModerationController::class, 'store']);
Route::put('/store_moderation/{id}', [StoreModerationController::class, 'update']);
Route::delete('/store_moderation/{id}', [StoreModerationController::class, 'destroy']);

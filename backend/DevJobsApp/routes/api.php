<?php

use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('jobs', [JobController::class, 'index']);

Route::get('jobs/{id}', [JobController::class, 'show']);

Route::get('/filter-jobs/{position}/{contract?}/{location?}', [JobController::class, 'display']);

Route::get('filter-jobs/{position}', [JobController::class, 'filterByPosition']);

Route::get('filter-jobs-via-contract/{contract}', [JobController::class, 'filterByContract']);

Route::get('filter-jobs-via-location/{location}/{contract?}', [JobController::class, 'filterByLocation']);

Route::get('filter-job/{position}/{location}', [JobController::class, 'filterByPositionAndLocation']);
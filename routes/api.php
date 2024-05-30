<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;

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



Route::post('/survey', [SurveyController::class, 'store']);
Route::get('/survey/{id}', [SurveyController::class, 'show']);
Route::post('/survey/{id}/response', [SurveyController::class, 'storeResponse']);
Route::get('/surveys', [SurveyController::class, 'index']);

Route::get('/survey-responses/{id}', [SurveyController::class, 'getResponses']);

 Route::post('/login', [AuthController::class, 'login']);

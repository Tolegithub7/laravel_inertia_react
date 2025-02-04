<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

Route::get('/', [PostController::class, 'index']);
Route::get('/create', function (){
    return Inertia::render('Create');
});
Route::resource('posts', PostController::class)->except('index');
// Route::get('/', function () {
//     // sleep(1);
//     return Inertia::render('Home', ['name' => 'Tolosa']);
// });
// Route::inertia('/', 'Home'); 
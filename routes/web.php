<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\SantriController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(Request $req) {
    return $req->user('guru');
});

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/auth', [AuthController::class, 'auth']);

Route::middleware('is-auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard', [
            'title' => 'Dashboard',
        ]);
    });
    Route::resource('/guru', GuruController::class);
    Route::resource('/santri', SantriController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});

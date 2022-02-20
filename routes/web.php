<?php

use App\Http\Controllers\GuruController;
use App\Http\Controllers\SantriController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function() {
    return Inertia::render('Admin/Dashboard', [
        'title' => 'Dashboard',
    ]);
});

Route::inertia('/login', 'Login')->name('login');
Route::resource('/guru', GuruController::class);
Route::resource('/santri', SantriController::class);
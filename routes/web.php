<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\KelasSantriController;
use App\Http\Controllers\NilaiController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\SantriController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/test', function (Request $req) {
    return $req->user('guru');
});

Route::get('/', [AuthController::class, 'login'])->name('login');
Route::post('/auth', [AuthController::class, 'auth']);

Route::middleware('is-auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard', [
            'title' => 'Dashboard',
        ]);
    });

    Route::resource('/guru', GuruController::class);
    Route::resource('/santri', SantriController::class);
    Route::resource('/pembayaran', PembayaranController::class);

    Route::get('/pembayaran/create/{santri_id}', [PembayaranController::class, 'create']);

    Route::resource('/kelas', KelasController::class);

    Route::post('/kelas-santri', [KelasSantriController::class, 'store']);
    Route::post('/nilai', [NilaiController::class, 'store']);

    Route::post('/logout', [AuthController::class, 'logout']);
});

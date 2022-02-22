<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Santri;
use App\Models\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(Request $req)
    {
        if (Auth::guard('web')->check() || Auth::guard('guru')->check() || Auth::guard('santri')->check()) {
            return redirect('/dashboard');
        }

        return Inertia::render('Login', [
            'title' => 'Login Page',
        ]);
    }

    public function auth(Request $req)
    {
        $user = User::count();

        if ($user == 0) {
            User::create([
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'status' => 9,
                'password' => Hash::make('Admin123'),
            ]);
        }

        $req->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        $uc = User::where('email', $req->username)->first();
        if ($uc) {
            Auth::guard('web')->attempt(['email' => $req->username, 'password' => $req->password, 'status' => 9]);
        }

        $gc = Guru::where('nip', $req->username)->first();
        if ($gc) {
            Auth::guard('guru')->attempt(['nip' => $req->username, 'password' => $req->password]);
        }

        $sc = Santri::where('nis', $req->username)->first();
        if ($sc) {
            Auth::guard('santri')->attempt(['nis' => $req->username, 'password' => $req->password]);
        }

        if (Auth::guard('web')->check() || Auth::guard('guru')->check() || Auth::guard('santri')->check()) {
            $req->session()->regenerate();

            return redirect()->intended('dashboard')->with([
                'icon' => 'success',
                'title' => 'Berhasil login !',
            ]);
        }

        return back()->withErrors([
            'username' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $req)
    {
        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect('/login');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
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
            'whos' => ['required'],
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if ($req->whos == 'admin') {
            if (Auth::guard('web')->attempt([
                'email' => $req->username,
                'password' => $req->password,
                'status' => 1,
            ])) {
                $req->session()->regenerate();
            }
        }

        if ($req->whos == 'guru') {
            if (Auth::guard('guru')->attempt([
                'email' => $req->username,
                'password' => $req->password,
            ])) {
                $req->session()->regenerate();
            }
        }

        if ($req->whos == 'santri') {
            if (Auth::guard('santri')->attempt([
                'nik' => $req->username,
                'password' => $req->password,
            ])) {
                $req->session()->regenerate();
            }
        }

        if (Auth::check()) {
            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $req)
    {
        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect('/');
    }
}

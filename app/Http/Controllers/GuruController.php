<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function index()
    {
        $guru = Guru::latest()->paginate(10);

        return Inertia::render('Guru/Guru', [
            'title' => 'Data Guru',
            'guru' => $guru,
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/Create', [
            'title' => 'Tambah Data Guru',
        ]);
    }

    public function store(Request $req)
    {
        $data = $req->validate([
            'nama' => ['required'],
            'nip' => ['required', 'unique:guru,nip'],
            'alamat' => ['required'],
            'jenis_kelamin' => ['required'],
            'telp' => ['required'],
        ]);

        Guru::create(array_merge($data, ['password' => Hash::make('Guru123')]));

        return redirect('/guru')->with([
            'icon' => 'success',
            'title' => 'Berhasil tambah data guru !',
        ]);
    }

    public function show(Guru $guru)
    {
        //
    }

    public function edit(Guru $guru)
    {
        return Inertia::render('Guru/Edit', [
            'title' => 'Ubah Data Guru',
            'guru' => $guru,
        ]);
    }

    public function update(Request $req, Guru $guru)
    {
        $data = $req->validate([
            'nama' => ['required'],
            'nip' => ['required', "unique:guru,nip,$guru->id,id"],
            'alamat' => ['required'],
            'jenis_kelamin' => ['required'],
            'telp' => ['required'],
        ]);

        $guru->update($data);

        if ($req->password) {
            $guru->update(['password' => Hash::make($req->password)]);
        }

        return redirect('/guru')->with([
            'icon' => 'success',
            'title' => 'Berhasil ubah data guru !',
        ]);
    }

    public function destroy(Guru $guru)
    {
        Guru::destroy($guru->id);

        return redirect('/guru')->with([
            'icon' => 'success',
            'title' => 'Berhasil hapus data guru !',
        ]);
    }
}

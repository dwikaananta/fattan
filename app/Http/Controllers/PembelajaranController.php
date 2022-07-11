<?php

namespace App\Http\Controllers;

use App\Models\Pembelajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PembelajaranController extends Controller
{
    public function index(Request $req)
    {
        $pembelajaran = Pembelajaran::latest()->paginate();

        return Inertia::render('Pembelajaran/Pembelajaran', [
            'title' => 'Data Pembelajaran',
            'pembelajaran' => $pembelajaran,
        ]);
    }

    public function create()
    {
        return Inertia::render('Pembelajaran/Create', [
            'title' => 'Tambah Data Pembelajaran',
        ]);
    }

    public function store(Request $req)
    {
        $data = $req->validate([
            'judul' => 'required',
            'tanggal' => 'required',
            'foto' => 'nullable|mimes:jpg,jpeg,png',
            'isi' => 'required',
        ]);

        $pembelajaran = Pembelajaran::create($data);

        if ($req->hasFile('foto')) {
            $name = $pembelajaran->id . "." . $req->file('foto')->extension();
            Storage::putFileAs("public/pembelajaran", $req->file('foto'), $name);
        }

        $pembelajaran->update(['foto' => $name]);

        return redirect('/pembelajaran')->with([
            'icon' => 'success',
            'title' => 'Berhasil tambah data pembelajaran !',
        ]);
    }

    public function show(Request $req, Pembelajaran $pembelajaran)
    {

        return Inertia::render('Pembelajaran/Show', [
            'title' => 'Lihat Data Pembelajaran',
            'pembelajaran' => $pembelajaran,
        ]);
    }

    public function edit(Pembelajaran $pembelajaran)
    {
        return Inertia::render('Pembelajaran/Edit', [
            'title' => 'Ubah Data Pembelajaran',
            'pembelajaran' => $pembelajaran,
        ]);
    }

    public function update(Request $req, Pembelajaran $pembelajaran)
    {
        $req->validate([
            'judul' => 'required',
            'tanggal' => 'required',
            'isi' => 'required',
        ]);

        $pembelajaran->update($req->except(['foto']));

        if ($req->hasFile('foto')) {
            $name = $pembelajaran->id . "." . $req->file('foto')->extension();
            Storage::putFileAs("public/pembelajaran", $req->file('foto'), $name);
        }

        return redirect('/pembelajaran')->with([
            'icon' => 'success',
            'title' => 'Berhasil ubah data pembelajaran !',
        ]);
    }

    public function destroy(Pembelajaran $pembelajaran)
    {
        Pembelajaran::destroy($pembelajaran->id);

        return redirect('/pembelajaran')->with([
            'icon' => 'success',
            'title' => 'Berhasil hapus data pembelajaran !',
        ]);
    }
}

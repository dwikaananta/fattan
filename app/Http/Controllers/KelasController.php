<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use App\Models\KelasSantri;
use App\Models\Santri;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelasController extends Controller
{
    public function index()
    {
        $kelas = Kelas::with('guru')->latest()->paginate(10);

        return Inertia::render('Kelas/Kelas', [
            'title' => 'Data Kelas',
            'kelas' => $kelas,
        ]);
    }

    public function create()
    {
        $guru = Guru::orderBy('nama')->get();

        return Inertia::render('Kelas/Create', [
            'title' => 'Tambah Data Kelas',
            'guru' => $guru,
        ]);
    }

    public function store(Request $req)
    {
        $data = $req->validate([
            'guru_id' => 'required',
            'kelas' => 'required',
            'tahun_ajaran' => 'required',
        ]);

        Kelas::create($data);

        return redirect('/kelas')->with([
            'icon' => 'success',
            'title' => 'Berhasil tambah data kelas !',
        ]);
    }

    public function show($id)
    {
        $kelas = Kelas::with(['santri' => fn ($query) => $query->with('kelas_santri'), 'guru'])->find($id);
        $santri = Santri::doesntHave('kelas')->orderBy('nama')->get();

        return Inertia::render('Kelas/Show', [
            'title' => 'Lihat Data Kelas',
            'kelas' => $kelas,
            'santri' => $santri,
        ]);
    }

    public function edit($id)
    {
        $kelas = Kelas::find($id);
        $guru = Guru::orderBy('nama')->get();

        return Inertia::render('Kelas/Edit', [
            'title' => 'Ubah Data Kelas',
            'kelas' => $kelas,
            'guru' => $guru,
        ]);
    }

    public function update(Request $req, $id)
    {
        $kelas = Kelas::find($id);

        $data = $req->validate([
            'guru_id' => 'required',
            'kelas' => 'required',
            'tahun_ajaran' => 'required',
        ]);

        $kelas->update($data);

        return redirect('/kelas')->with([
            'icon' => 'success',
            'title' => 'Berhasil ubah data kelas !',
        ]);
    }

    public function destroy(Kelas $kelas)
    {
        Kelas::destroy($kelas->id);

        return redirect('/kelas')->with([
            'icon' => 'success',
            'title' => 'Berhasil hapus data kelas !',
        ]);
    }
}

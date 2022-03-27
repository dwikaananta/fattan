<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use App\Models\KelasSantri;
use App\Models\Mapel;
use App\Models\Santri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class KelasController extends Controller
{
    public function index(Request $req)
    {
        $kelas = Kelas::when(Auth::guard('guru')->check(), fn ($query) => $query->where('guru_id', $req->user('guru')->id))
            ->with('guru')->latest()->paginate(10);

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
        $kelas = Kelas::with([
            'kelas_santri' => fn ($query) => $query->with('nilai'),
            'santri' => fn ($query) => $query->with('kelas_santri'),
            'guru'
        ])->find($id);
        $santri = Santri::doesntHave('kelas')->orderBy('nama')->get();

        $mapel = Mapel::orderBy('nama')->get();

        return Inertia::render('Kelas/Show', [
            'title' => 'Lihat Data Kelas',
            'kelas' => $kelas,
            'santri' => $santri,
            'mapel' => $mapel,
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

    public function destroy($id)
    {
        Kelas::destroy($id);

        return redirect('/kelas')->with([
            'icon' => 'success',
            'title' => 'Berhasil hapus data kelas !',
        ]);
    }
}

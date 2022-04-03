<?php

namespace App\Http\Controllers;

use App\Models\Mapel;
use App\Models\Santri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SantriController extends Controller
{
    public function index(Request $req)
    {
        $santri = Santri::with('pembayaran')->latest()->paginate();

        return Inertia::render('Santri/Santri', [
            'title' => 'Data Santri',
            'santri' => $santri,
        ]);
    }

    public function create()
    {
        return Inertia::render('Santri/Create', [
            'title' => 'Tambah Data Santri',
        ]);
    }

    public function store(Request $req)
    {
        $data = $req->validate([
            'nama' => ['required'],
            'nik' => ['required', 'unique:santri,nik'],
            'kk' => ['required'],
            'tempat_lahir' => ['required'],
            'tanggal_lahir' => ['required'],
            'jenis_kelamin' => ['required'],
            'nama_ortu' => ['required'],
            'telp_ortu' => ['required'],
            'alamat' => ['required'],
        ]);

        function generateNis($last_id)
        {
            $new_id = $last_id + 1;
            $default = 4;
            $length_id = strlen($new_id);
            $range = $default - $length_id;

            $data = '';
            for ($i = 0; $i < $range; $i++) {
                $data = $data . '0';
            }

            return $data . $new_id;
        }

        $last_id = Santri::max('id');

        Santri::create(array_merge($data, [
            'nis' => generateNis($last_id),
            'password' => Hash::make('Santri123'),
        ]));

        return redirect('/santri')->with([
            'icon' => 'success',
            'title' => 'Berhasil tambah data santri !',
        ]);
    }

    public function show(Request $req, Santri $santri)
    {
        $santri = Santri::with([
            'pembayaran',
            'kelas_santri' => fn ($query) => $query->with(['nilai', 'kelas' => fn($query) => $query->with('guru')]),
        ])->find($santri->id);

        $mapel = Mapel::orderBy('nama')->get();

        $section = $req->section ? $req->section : false;

        if ($req->cetak_ijasah) {
            return Inertia::render('Santri/CetakIjasah', [
                'title' => 'Lihat Data Santri',
                'santri' => $santri,
                'mapel' => $mapel,
                'section' => $section,
            ]);
        } else {
            return Inertia::render('Santri/Show', [
                'title' => 'Lihat Data Santri',
                'santri' => $santri,
                'mapel' => $mapel,
                'section' => $section,
            ]);
        }
    }

    public function edit(Santri $santri)
    {
        return Inertia::render('Santri/Edit', [
            'title' => 'Ubah Data Santri',
            'santri' => $santri,
        ]);
    }

    public function update(Request $req, Santri $santri)
    {
        $data = $req->validate([
            'nama' => ['required'],
            'nik' => ['required', "unique:santri,nik,$santri->id,id"],
            'kk' => ['required'],
            'tempat_lahir' => ['required'],
            'tanggal_lahir' => ['required'],
            'jenis_kelamin' => ['required'],
            'nama_ortu' => ['required'],
            'telp_ortu' => ['required'],
            'alamat' => ['required'],
        ]);

        if ($req->password) {
            $santri = $santri->update(array_merge($data, ['password' => Hash::make($req->password)]));
        }

        return redirect('/santri')->with([
            'icon' => 'success',
            'title' => 'Berhasil ubah data santri !',
        ]);
    }

    public function destroy(Santri $santri)
    {
        Santri::destroy($santri->id);

        return redirect('/santri')->with([
            'icon' => 'success',
            'title' => 'Berhasil hapus data santri !',
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Mapel;
use App\Models\Nilai;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NilaiSantriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function create($kelas_santri_id, $kelas_id)
    {
        $mapel = Mapel::orderBy('nama')->get();

        return Inertia::render('NilaiSantri/Create', [
            'title' => 'Tambah Data Nilai Santri',
            'mapel' => $mapel,
            'kelas_santri_id' => $kelas_santri_id,
            'kelas_id' => $kelas_id,
        ]);
    }

    public function store(Request $req, $kelas_santri_id)
    {
        $data = $req->validate([
            'mapel_id' => 'required',
            'nilai' => 'required',
        ]);

        Nilai::updateOrCreate([
            'kelas_santri_id' => $kelas_santri_id,
            'mapel_id' => $req->mapel_id,
        ], array_merge(['kelas_santri_id' => $kelas_santri_id], $data));

        return back()->with([
            'icon' => 'success',
            'title' => 'Berhasil ubah data nilai !',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

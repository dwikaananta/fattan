<?php

namespace App\Http\Controllers;

use App\Models\KelasSantri;
use Illuminate\Http\Request;

class KelasSantriController extends Controller
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        if ($req->is_delete) {
            // ini delete santri dari kelas
            $ks = KelasSantri::where([
                'kelas_id' => $req->kelas_id,
                'santri_id' => $req->santri_id,
            ])->first();

            KelasSantri::destroy($ks->id);

            return back()->with([
                'icon' => 'success',
                'title' => 'Berhasil hapus data santri !',
            ]);
        } else {
            // ini tambah santri dari kelas
            KelasSantri::updateOrCreate([
                'kelas_id' => $req->kelas_id,
                'santri_id' => $req->santri_id,
            ], [
                'kelas_id' => $req->kelas_id,
                'santri_id' => $req->santri_id,
            ]);

            return back()->with([
                'icon' => 'success',
                'title' => 'Berhasil ubah data kelas !',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KelasSantri  $kelasSantri
     * @return \Illuminate\Http\Response
     */
    public function show(KelasSantri $kelasSantri)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KelasSantri  $kelasSantri
     * @return \Illuminate\Http\Response
     */
    public function edit(KelasSantri $kelasSantri)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KelasSantri  $kelasSantri
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KelasSantri $kelasSantri)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KelasSantri  $kelasSantri
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // 
    }
}

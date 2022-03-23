<?php

namespace App\Http\Controllers;

use App\Models\Pembayaran;
use App\Models\Santri;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PembayaranController extends Controller
{
    public function index()
    {
        // 
    }

    public function create($santri_id = false)
    {
        if ($santri_id) {
            $santri = Santri::find($santri_id);
        }

        return Inertia::render('Pembayaran/Create', [
            'title' => 'Tambah Data Pembayaran Santri',
            'santri' => $santri ?? null,
        ]);
    }

    public function store(Request $req)
    {
        $data = $req->validate([
            'santri_id' => 'required|numeric',
            'nominal' => 'required|numeric',
            'tanggal_transaksi' => 'required|date',
            'kelas' => 'required',
            'semester' => 'required',
        ]);

        Pembayaran::create($data);

        return redirect("/santri/$req->santri_id")->with([
            'icon' => 'success',
            'title' => 'Berhasil tambah data santri !',
            'menus' => 'pembayaran',
        ]);
    }

    public function show(Pembayaran $pembayaran)
    {
        //
    }

    public function edit(Pembayaran $pembayaran)
    {
        //
    }

    public function update(Request $request, Pembayaran $pembayaran)
    {
        //
    }

    public function destroy(Pembayaran $pembayaran)
    {
        //
    }
}

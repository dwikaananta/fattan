<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Santri extends Authenticatable
{
    use HasFactory, SoftDeletes;

    protected $table = 'santri';

    protected $fillable = [
        'nis',
        'nama',
        'nik',
        'kk',
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'nama_ortu',
        'telp_ortu',
        'alamat',
        'password',
    ];

    public function pembayaran()
    {
        return $this->hasMany(Pembayaran::class, 'santri_id', 'id');
    }

    public function kelas()
    {
        return $this->belongsToMany(Kelas::class, 'kelas_santri', 'santri_id', 'kelas_id');
    }

    public function kelas_santri()
    {
        return $this->hasMany(KelasSantri::class, 'santri_id', 'id');
    }
}

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
}

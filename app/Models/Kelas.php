<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;

    protected $table = 'kelas';

    protected $fillable = [
        'guru_id',
        'kelas',
        'tahun_ajaran',
    ];

    public function kelas_santri()
    {
        return $this->hasMany(KelasSantri::class, 'kelas_id', 'id');
    }

    public function santri()
    {
        return $this->belongsToMany(Santri::class, 'kelas_santri', 'kelas_id', 'santri_id')->withPivot('id as kelas_santri_id');
    }

    public function guru()
    {
        return $this->belongsTo(Guru::class, 'guru_id', 'id');
    }
}

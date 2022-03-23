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
        'semester',
    ];

    public function santri()
    {
        return $this->belongsToMany(Santri::class, 'kelas_santri', 'kelas_id', 'santri_id');
    }

    public function guru()
    {
        return $this->belongsTo(Guru::class, 'guru_id', 'id');
    }
}

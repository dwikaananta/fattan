<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KelasSantri extends Model
{
    use HasFactory;

    protected $table = 'kelas_santri';

    protected $fillable = [
        'kelas_id',
        'santri_id',
    ];

    public function nilai()
    {
        return $this->hasMany(Nilai::class, 'kelas_santri_id', 'id');
    }

    public function kelas()
    {
        return $this->belongsTo(Kelas::class, 'kelas_id', 'id');
    }
}

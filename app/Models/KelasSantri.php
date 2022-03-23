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
}

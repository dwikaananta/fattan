<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('santri', function (Blueprint $table) {
            $table->id();
            $table->char('nis', 4);
            $table->string('nama', 100);
            $table->string('nik', 30)->unique();
            $table->string('kk', 30);
            $table->date('tanggal_lahir')->nullable();
            $table->boolean('jenis_kelamin');
            $table->string('nama_ortu', 100);
            $table->string('telp_ortu', 30)->nullable();
            $table->string('alamat')->nullable();
            $table->string('password')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('santri');
    }
};

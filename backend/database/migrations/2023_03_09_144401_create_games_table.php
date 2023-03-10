<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gc_games', function (Blueprint $table) {
            $table->id();
            $table->integer('fitgirlId')->nullable();
            $table->string('title', 255);
            $table->string('genre', 255)->nullable();
            $table->string('size', 100)->nullable();
            $table->date('dtLastChecked');
            $table->string('status', 50)->nullable();
            $table->text('summary')->nullable();
            $table->text('thoughts')->nullable();
            $table->string('issues')->nullable();

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
        Schema::dropIfExists('gc_games');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_goals', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title', 255);
            $table->integer('type');
            $table->integer('priority')->nullable();
            $table->text('reason')->nullable();
            $table->text('note')->nullable();
            $table->text('tags')->nullable();
            $table->date('start_timeframe')->nullable();
            $table->date('end_timeframe')->nullable();
            $table->date('added_at')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_goals');
    }
};

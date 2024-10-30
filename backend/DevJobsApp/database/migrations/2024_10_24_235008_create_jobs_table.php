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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('company');
            $table->string('logo'); 
            $table->string('position');
            $table->string('postedAt');
            $table->string('contract');
            $table->string('location');
            $table->string('description');
            $table->string('requirement_content');
            $table->string('requirement_items');
            $table->string('role_content');
            $table->string('role_items');
            $table->string('apply');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};

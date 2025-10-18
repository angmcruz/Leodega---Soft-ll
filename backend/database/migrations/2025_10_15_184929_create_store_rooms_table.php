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
        Schema::create('storeRooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('landlord_id')->constrained('landlords')->onDelete('cascade');
            $table->string('direction')->nullable(false);
            $table->string('city')->nullable(false);
            $table->string('geographical_zone')->nullable(false);
            $table->decimal('size', 10, 2)->nullable(false);
            $table->string('description')->nullable(false);
            $table->enum('publication_status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->dateTime('publication_date')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('storeRooms');
    }
};

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
        Schema::table('reports', function (Blueprint $table) {
            if (!Schema::hasColumn('reports', 'title')) {
                $table->string('title')->nullable();
            }

            if (!Schema::hasColumn('reports', 'priority')) {
                $table->string('priority')->nullable();
            }

            if (Schema::hasColumn('reports', 'report_date')) {
                $table->dropColumn('report_date');
            }
        });
    }
};

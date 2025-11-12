<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@leodega.com'],
            [
                'name' => 'Administrador',
                'lastName' => 'Leodega',
                'phone' => '0999999999',
                'password' => Hash::make('admin123'),
                'role' => 'admin',
            ]
        );
    }
}

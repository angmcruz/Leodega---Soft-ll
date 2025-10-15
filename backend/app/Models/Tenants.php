<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenants extends Model
{
    use HasFactory;
    protected $table = 'tenants';
    protected $fillable = [
        'user_id',
        'search_preference'
    ];
    //
}

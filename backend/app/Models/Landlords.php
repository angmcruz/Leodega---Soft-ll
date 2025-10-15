<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Landlords extends Model
{
    use HasFactory;
    protected $table = 'landlords';
    protected $fillable = [
        'user_id',
        'optional_company'
    ];
    
    //
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorites extends Model
{
    //
    use HasFactory;
    protected $table = 'favorites';
    protected $fillable = ['user_id', 'store_room_id','save_date'];
}

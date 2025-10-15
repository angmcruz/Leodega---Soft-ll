<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StorePhoto extends Model
{
    //
    use HasFactory;
    protected $table = 'store_photo';
    protected $fillable = ['store_room_id', 'photo_url'];
    
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StoreRooms extends Model
{
    use HasFactory;
    protected $table = 'store_rooms';
    protected $fillable = [
        'landlord_id',
        'direction',
        'city',
        'geographical_zone',
        'size',
        'description',
        'publication_status',
        'publication_date'
    ];
    //
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservations extends Model
{
    //
    use HasFactory;
    protected $table = 'reservations';
    protected $fillable = [
        'store_room_id',
        'tenant_id',
        'start_date',
        'end_date',
        'status',
        'total_mount',
        'cancelation_reason',
        'creation_date'
    ];
}

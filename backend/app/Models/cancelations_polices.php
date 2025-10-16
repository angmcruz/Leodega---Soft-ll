<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cancelations_polices extends Model
{
    //
    use HasFactory;
    protected $table = 'cancelations_polices';
    protected $fillable = [
        'landlord_id',
        'policy_name',
        'description',
        'is_default',
    ];
}

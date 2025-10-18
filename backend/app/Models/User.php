<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $table = 'user';
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'start_date',
        'state',
        'enable_messages'
    ];

    protected $hidden = [
        'password',
    ];

    public function setPasswordAttribute($value)
    {
        if ($value && (strlen($value) !== 60 || !preg_match('/^\$2y\$/', $value))) {
            $this->attributes['password'] = bcrypt($value);
        } else {
            $this->attributes['password'] = $value;
        }
    }

    // Relation with Landlords
    public function landlord()
    {
        return $this->hasOne(Landlords::class, 'user_id');
    }

    public function tenant(){
        return $this->hasOne(Tenants::class, 'user_id');
    }

    public function sendNotifications(){
        return $this->hasMany(Notifications::class, 'emisor_id');
    }

    public function receivedNotifications(){
        return $this->hasMany(Notifications::class, 'receptor_id');
    }

    public function ratings(){
        return $this->hasMany(Ratings::class, 'user_id');
    }

    public function reports(){
        return $this->hasMany(Reports::class, 'user_id');
    }

    public function admin(){
        return $this->hasOne(Admin::class, 'user_id');
    }

    

}

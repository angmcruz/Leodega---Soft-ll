<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    protected $table = 'user';

    protected $fillable = [
        'name',
        'lastname',
        'email',
        'phone',
        'password',
        'role',
        'start_date',
        'state',
        'enable_messages',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function setPasswordAttribute($value)
    {
        if ($value && (strlen($value) !== 60 || ! preg_match('/^\$2y\$/', $value))) {
            $this->attributes['password'] = bcrypt($value);
        } else {
            $this->attributes['password'] = $value;
        }
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token, $this->email));
    }

    // Relation with Landlords
    public function landlord()
    {
        return $this->hasOne(Landlords::class, 'user_id');
    }

    public function tenant()
    {
        return $this->hasOne(Tenants::class, 'user_id');
    }

    public function sendNotifications()
    {
        return $this->hasMany(Notifications::class, 'emisor_id');
    }

    public function receivedNotifications()
    {
        return $this->hasMany(Notifications::class, 'receptor_id');
    }

    public function ratings()
    {
        return $this->hasMany(Ratings::class, 'user_id');
    }

    public function reports()
    {
        return $this->hasMany(Reports::class, 'user_id');
    }

    public function admin()
    {
        return $this->hasOne(Admin::class, 'user_id');
    }
}

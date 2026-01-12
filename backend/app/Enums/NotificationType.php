<?php
namespace App\Enums;

enum NotificationType: string
{
    //
    case MESSAGE = 'message';
    case RESERVATION_CREATED = 'reservation_created';
    case RESERVATION_APPROVED = 'reservation_approved';
    case RESERVATION_REJECTED = 'reservation_rejected';
    case STORE_CREATED = 'store_created';
    case STORE_REPORTED = 'store_reported';
}

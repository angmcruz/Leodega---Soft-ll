<?php

namespace App\Services;

use App\Models\Notifications;
use App\Enums\NotificationType;

class NotificationService
{
    public static function send(
        int $senderId,
        int $receiverId,
        NotificationType $type,
        string $title,
        ?string $body = null,
        array $data = []
    ): Notifications {
        return Notifications::create([
            'emisor_id' => $senderId,
            'receptor_id' => $receiverId,
            'reservation_id' => $data['reservation_id'] ?? null,
            'message' => $title, 
        ]);
    }
}

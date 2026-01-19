<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use App\NotificationType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;

class NotificationsController extends Controller
{
    public function index()
    {
        return Notifications::where('receptor_id', auth()->id())
            ->latest()
            ->limit(20)
            ->get();
    }

    public function unreadCount()
    {
        $count = Notifications::where('receptor_id', auth()->id())
            ->where('is_read', false)
            ->count();

        return response()->json([
            'count' => $count
        ]);
    }

    public function markAsRead(Notifications $notification)
    {
        if ($notification->receptor_id !== auth()->id()) {
            abort(403);
        }

        $notification->update(['is_read' => true]);

        return response()->json([
            'message' => 'Notificación marcada como leída'
        ]);
    }
}

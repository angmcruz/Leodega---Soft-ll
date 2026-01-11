<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\User;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    // Listar chats del usuario
    public function index()
    {
        return auth()->user()
            ->conversations()
            ->with(['users:id,name', 'lastMessage'])
            ->get();
    }

    // Crear conversación (1 a 1)
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:user,id',
        ]);

        $authId = auth()->id();

        // Buscar si ya existe conversación entre ambos
        $conversation = Conversation::whereHas('users', function ($q) use ($authId) {
                $q->where('user_id', $authId);
            })
            ->whereHas('users', function ($q) use ($request) {
                $q->where('user_id', $request->user_id);
            })
            ->first();

        if ($conversation) {
            return $conversation;
        }

        $conversation = Conversation::create();

        $conversation->users()->attach([
            $authId,
            $request->user_id,
        ]);

        return $conversation;
    }
}


<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    // Mensajes de una conversación
    public function index(Conversation $conversation)
    {
        $this->authorizeConversation($conversation);

        return $conversation
            ->messages()
            ->with('sender:id,name')
            ->orderBy('created_at', 'asc')
            ->paginate(20);
    }

    // Enviar mensaje
    public function store(Request $request, Conversation $conversation)
    {
        $this->authorizeConversation($conversation);

        $request->validate([
            'body' => 'required|string',
        ]);

        return Message::create([
            'conversation_id' => $conversation->id,
            'sender_id' => auth()->id(),
            'body' => $request->body,
        ]);
    }

    // Marcar mensajes como leídos
    public function markRead(Conversation $conversation)
    {
        // seguridad
        if (!$conversation->users->contains(auth()->id())) {
            abort(403);
        }

        Message::where('conversation_id', $conversation->id)
            ->where('sender_id', '!=', auth()->id())
            ->where('is_read', false)
            ->update(['is_read' => true]);

        return response()->json(['ok' => true]);
    }


    private function authorizeConversation(Conversation $conversation)
    {
        if (!$conversation->users()->where('user_id', auth()->id())->exists()) {
            abort(403);
        }
    }
}

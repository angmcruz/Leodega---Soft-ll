import { useEffect, useState } from "react";
import api from "../api/axios";
import { Send, Plus } from "lucide-react";

interface User {
    id: number;
    name: string;
    lastname: string;
}

interface Message {
    id: number;
    body: string;
    sender_id: number;
    created_at: string;
    sender: User;
}

interface Conversation {
    id: number;
    users: User[];
    last_message?: Message;
    unread_count: number;
}

const Mensajes = () => {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageText, setMessageText] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [showNewChat, setShowNewChat] = useState(false);
    const [search, setSearch] = useState("");


    /** Auth */
    const loadAuthUser = async () => {
        const res = await api.get("/me");
        setAuthUser(res.data.user);
    };

    /** Conversaciones */
    const loadConversations = async () => {
        const res = await api.get("/conversations");
        setConversations(res.data);
    };

    /** Mensajes */
    const loadMessages = async (conversationId: number) => {
        const res = await api.get(`/conversations/${conversationId}/messages`);
        setMessages(res.data.data);
    };

    const filteredConversations = conversations.filter((conv) => {
        const otherUser = conv.users.find(
            (u) => u.id !== authUser?.id
        );

        const nameMatch =
            otherUser?.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            otherUser?.lastname
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const messageMatch =
            conv.last_message?.body
                ?.toLowerCase()
                .includes(search.toLowerCase());

        return nameMatch || messageMatch;
    });


    /** Abrir conversación + marcar leídos */
    const openConversation = async (conv: Conversation) => {
        setActiveConversation(conv);
        await loadMessages(conv.id);
        await api.post(`/conversations/${conv.id}/read`);
        loadConversations();
    };

    /** Enviar mensaje */
    const sendMessage = async () => {
        if (!messageText.trim() || !activeConversation) return;

        await api.post(`/conversations/${activeConversation.id}/messages`, {
            body: messageText,
        });

        setMessageText("");
        loadMessages(activeConversation.id);
        loadConversations();
    };

    /** Nuevo chat */
    const startConversation = async (userId: number) => {
        const res = await api.post("/conversations", { user_id: userId });
        setShowNewChat(false);
        setActiveConversation(res.data);
        loadConversations();
        loadMessages(res.data.id);
    };

    /** Usuarios */
    const loadUsers = async () => {
        const res = await api.get("/user");
        setUsers(res.data);
    };

    useEffect(() => {
        loadAuthUser();
        loadConversations();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* SIDEBAR */}
            <div className="w-1/4 bg-white border-r flex flex-col">

                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-bold text-lg">Chats</h2>
                    <button onClick={() => { setShowNewChat(true); loadUsers(); }}>
                        <Plus />
                    </button>
                </div>

                {/* SEARCH */}
                <div className="p-3 border-b">
                    <input
                        type="text"
                        placeholder="Buscar chat..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded
                       focus:outline-none focus:ring
                       focus:ring-blue-200"
                    />
                </div>

                {filteredConversations.map((conv) => {
                    const otherUser = conv.users.find(u => u.id !== authUser?.id);

                    return (
                        <div
                            key={conv.id}
                            onClick={() => openConversation(conv)}
                            className={`p-4 border-b cursor-pointer flex items-center gap-3 min-w-0
                                ${conv.unread_count > 0 ? "bg-blue-50" : "hover:bg-gray-100"}
                            `}
                        >
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold truncate">
                                    {otherUser?.name} {otherUser?.lastname}
                                </p>

                                {conv.last_message && (
                                    <p className={`text-sm truncate ${conv.unread_count > 0
                                        ? "font-bold text-black"
                                        : "text-gray-500"
                                        }`}>
                                        {conv.last_message.sender_id === authUser?.id && "Tú: "}
                                        {conv.last_message.body}
                                    </p>
                                )}
                            </div>

                            {conv.unread_count > 0 && (
                                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                    {conv.unread_count}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* CHAT */}
            <div className="flex-1 flex flex-col">
                {activeConversation ? (
                    <>
                        <div className="p-4 border-b bg-white font-bold">
                            Chat
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {messages.length === 0 && (
                                <p className="text-gray-400 text-center">No hay mensajes aún</p>
                            )}

                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`max-w-md p-2 rounded
                                        ${msg.sender_id === authUser?.id
                                            ? "bg-blue-500 text-white ml-auto"
                                            : "bg-gray-200"
                                        }
                                    `}
                                >
                                    {msg.body}
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t flex gap-2">
                            <input
                                className="flex-1 border rounded px-3 py-2"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                placeholder="Escribe un mensaje..."
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-blue-600 text-white px-4 rounded"
                            >
                                <Send />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-400">
                        Selecciona una conversación
                    </div>
                )}
            </div>

            {/* MODAL NUEVO CHAT */}
            {showNewChat && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white w-96 rounded p-4">
                        <h3 className="font-bold mb-3">Nuevo chat</h3>
                        {users.map((u) => (
                            <div
                                key={u.id}
                                onClick={() => startConversation(u.id)}
                                className="p-2 border-b cursor-pointer hover:bg-gray-100"
                            >
                                {u.name} {u.lastname}
                            </div>
                        ))}
                        <button
                            onClick={() => setShowNewChat(false)}
                            className="mt-3 text-sm text-red-500"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mensajes;

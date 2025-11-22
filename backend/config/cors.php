<?php

return [
    // La clave 'paths' define qué rutas de la API deben pasar por el middleware CORS.
    // 'api/*' aplica a todas tus rutas de API.
    'paths' => ['api/*', 'sanctum/csrf-cookie'], 

    // Los métodos permitidos: generalmente todos.
    'allowed_methods' => ['*'], 

    // ESTO ES LO MÁS IMPORTANTE Y DEBE SER SEGURO:
    // Lee la variable de entorno CORS_ALLOWED_ORIGINS. Si no existe, usa localhost.
    'allowed_origins' => explode(',', env('CORS_ALLOWED_ORIGINS', 'http://localhost:3000')), 

    'allowed_origins_patterns' => [],

    // Permite todas las cabeceras.
    'allowed_headers' => ['*'], 

    'exposed_headers' => [],

    'max_age' => 0,

    // Debe ser true para que Sanctum pueda enviar las cookies a través de dominios cruzados.
    'supports_credentials' => true, 
];
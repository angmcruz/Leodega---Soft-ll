<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cache;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/translations', function () {
    $locale = app()->getLocale();

    return Cache::remember(
        "translations_$locale",
        now()->addHours(12),
        fn () => response()->json([
            'locale' => $locale,
            'translations' => trans()->get('*'),
        ])
    );
});


Route::post('/language', function (Request $request) {
    $lang = $request->lang;

    if (!in_array($lang, ['es', 'en'])) {
        return response()->json(['error' => 'Invalid language'], 400);
    }

    session(['locale' => $lang]);
    app()->setLocale($lang);

    return response()->json(['locale' => $lang]);
});
<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // Synchronously
            'appName' => config('app.name'),

            // Lazily
            'auth.user' => function() {
                if (Auth::guard('web')->check()) {
                    return Auth::guard('web')->user();
                } return null;
            },

            'auth.guru' => function() {
                if (Auth::guard('guru')->check()) {
                    return Auth::guard('guru')->user();
                } return null;
            },

            'auth.santri' => function() {
                if (Auth::guard('santri')->check()) {
                    return Auth::guard('santri')->user();
                } return null;
            },

            // Flash msg
            'flash' => [
                'icon' => fn () => $request->session()->get('icon'),
                'title' => fn () => $request->session()->get('title'),
                'msg' => fn () => $request->session()->get('msg'),
                'menus' => fn () => $request->session()->get('menus'),
            ],
        ]);
    }
}

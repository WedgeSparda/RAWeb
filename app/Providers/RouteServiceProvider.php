<?php

declare(strict_types=1);

namespace App\Providers;

use App\Http\Concerns\HandlesPublicFileRequests;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;
use Laravel\Octane\Facades\Octane;

class RouteServiceProvider extends ServiceProvider
{
    use HandlesPublicFileRequests;

    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     */
    public const HOME = '/';

    public function boot(): void
    {
        /*
         * sanitize route model binding patterns
         */
        Route::pattern('slug', '-[a-zA-Z0-9_-]+');
        Route::pattern('user', '[a-zA-Z0-9_]{1,20}');

        // TODO v2
        // Route::bind('user', function ($value) {
        //     /**
        //      * TODO: resolve user by username, hashId, or both
        //      */
        //     $query = User::where('username', Str::lower($value));
        //
        //     /*
        //      * add last activity
        //      */
        //     $query->withLastActivity();
        //
        //     return $query->firstOrFail();
        // });
    }

    public function map(): void
    {
        $this->mapWebRoutes();
    }

    protected function mapWebRoutes(): void
    {
        Route::middleware(['web'])->group(function () {
            // prohibit GET form requests in request/
            Route::get('request/{path}.php', fn (string $path) => abort(405))->where('path', '(.*)');
            Route::post('request/{path}.php', fn (string $path) => $this->handleRequest('request/' . $path))->where('path', '(.*)');
        });

        Route::get('rss-{feed}', fn ($feed) => $this->handleRequest('rss-' . $feed . '.xml'));

        Route::middleware(['web', 'csp'])->group(function () {
            Route::get('download.php', fn () => $this->handlePageRequest('download'))->name('download.index');
            Route::get('gameList.php', fn () => $this->handlePageRequest('gameList'))->name('game.index');
            Route::get('{path}.php', fn (string $path) => $this->handlePageRequest($path))->where('path', '(.*)');
            Route::get('user/{user}', fn (string $user) => $this->handlePageRequest('userInfo', $user))->name('user.show');
            Route::get('achievement/{achievement}{slug?}', fn ($achievement) => $this->handlePageRequest('achievementInfo', $achievement))->name('achievement.show');
            Route::get('game/{game}{slug?}', fn ($game) => $this->handlePageRequest('gameInfo', $game))->name('game.show');
            Route::get('leaderboard/{leaderboard}{slug?}', fn ($leaderboard) => $this->handlePageRequest('leaderboardinfo', $leaderboard))->name('leaderboard.show');
        });

        Route::middleware(['web', 'csp'])->group(function () {
            /*
             * content
             */
            // Route::get('downloads', [DownloadController::class, 'index'])->name('download.index');
            // Route::get('feed', [FeedController::class, 'index'])->name('feed.index');
            // Route::get('rss/{resource}', [RssController::class, 'show'])->name('rss.show');
            // Route::get('search', [SearchController::class, 'index'])->name('search');

            /*
             * Octane test route
             */
            Octane::route('GET', '/octane', fn () => response('Octane'));

            /*
             * redirects
             */
            Route::get('redirect', [RedirectController::class, 'redirect'])->name('redirect');

            /*
             * user & permalinks
             */
            // Route::resource('user', UserController::class)->only('show');
            // Route::resource('users', UserController::class)->only('index')->names(['index' => 'user.index']);
            Route::get('u/{hashId}', [UserController::class, 'permalink'])->name('user.permalink');

            /*
             * protected routes, need an authenticated user with a verified email address
             * permissions are checked in controllers individually by authorizing abilities in the respective controller actions
             */
            Route::group([
                'middleware' => ['auth'],
            ], function () {
                // Route::get('notifications', [NotificationsController::class, 'index'])->name('notification.index');

                /*
                 * settings and user attributes
                 */
                // Route::group(['prefix' => 'settings'], function () {
                //     Route::get('keys', [SettingsController::class, 'edit'])->middleware('password.confirm');
                //     Route::get('{section?}', [SettingsController::class, 'edit'])->name('settings');
                //
                //     Route::put('profile', [SettingsController::class, 'updateProfile'])->name('settings.profile.update');
                //     Route::put('password', [SettingsController::class, 'updatePassword'])->name('settings.password.update');
                //     Route::put('email', [SettingsController::class, 'updateEmail'])->name('settings.email.update');
                //     Route::put('notifications', [SettingsController::class, 'updateNotificationPreferences'])->name('settings.notifications.update');
                // });
            });
        });
    }
}

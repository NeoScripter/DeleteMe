<?php

use App\Helpers\CmsBlockHelper;
use App\Http\Controllers\Admin\CMSController;
use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('user/home');
})->name('home');

Route::post('/mail', [EmailController::class, 'sendEmail'])->name('mail');


Route::middleware(['role:admin', 'auth'])->group(function () {
    Route::get('admin', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin.dashboard');

    Route::get('/admin/home', function () {
        return Inertia::render('admin/home', [
            'blocks' => CmsBlockHelper::getByPage('home'),
        ]);
    })->name('home.edit');


    Route::post('/admin/update', [CMSController::class, 'update'])->name('admin.update');
    Route::delete('/image/image', [CMSController::class, 'destroyImage'])->name('admin.image.destroy');
    Route::delete('/images/image', [CMSController::class, 'destroyGalleryImage'])->name('admin.images.destroy');
    Route::post('/images/reorder', [CMSController::class, 'reorderGalleryImages'])->name('admin.images.reorder');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

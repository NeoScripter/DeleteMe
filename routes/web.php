<?php

use App\Helpers\CmsBlockHelper;
use App\Http\Controllers\Admin\CMSController;
use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('user/home', [
        'blocks' => CmsBlockHelper::getByPage('home'),
        'shared' => CmsBlockHelper::getByPage('shared'),
    ]);
})->name('home');

Route::get('/policy', function () {
    return Inertia::render('user/policy', [
        'blocks' => CmsBlockHelper::getByPage('policy'),
        'shared' => CmsBlockHelper::getByPage('shared'),
    ]);
})->name('policy');

Route::get('/rules', function () {
    return Inertia::render('user/rules', [
        'blocks' => CmsBlockHelper::getByPage('rules'),
        'shared' => CmsBlockHelper::getByPage('shared'),
    ]);
})->name('rules');

Route::get('/agreement', function () {
    return Inertia::render('user/agreement', [
        'blocks' => CmsBlockHelper::getByPage('agreement'),
        'shared' => CmsBlockHelper::getByPage('shared'),
    ]);
})->name('agreement');

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

    Route::get('/admin/shared', function () {
        return Inertia::render('admin/shared', [
            'blocks' => CmsBlockHelper::getByPage('shared'),
        ]);
    })->name('shared.edit');

    Route::get('/admin/policy', function () {
        return Inertia::render('admin/policy', [
            'blocks' => CmsBlockHelper::getByPage('policy'),
        ]);
    })->name('policy.edit');

    Route::get('/admin/rules', function () {
        return Inertia::render('admin/rules', [
            'blocks' => CmsBlockHelper::getByPage('rules'),
        ]);
    })->name('rules.edit');

    Route::get('/admin/agreement', function () {
        return Inertia::render('admin/agreement', [
            'blocks' => CmsBlockHelper::getByPage('agreement'),
        ]);
    })->name('agreement.edit');


    Route::post('/admin/update', [CMSController::class, 'update'])->name('admin.update');
    Route::delete('/admin/block', [CMSController::class, 'destroy'])->name('admin.block.destroy');
    Route::delete('/image/image', [CMSController::class, 'destroyImage'])->name('admin.image.destroy');
    Route::delete('/images/image', [CMSController::class, 'destroyGalleryImage'])->name('admin.images.destroy');
    Route::post('/images/reorder', [CMSController::class, 'reorderGalleryImages'])->name('admin.images.reorder');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

<?php

namespace App\Helpers;

use App\Models\CmsBlock;
use Illuminate\Support\Facades\Cache;

class CmsBlockHelper
{
    public static function getByPage(string $page_slug, string $key)
    {
        $value = Cache::flexible($key, [60, 60 * 60 * 24], function () use ($page_slug) {
            return CmsBlock::with(['images' => function ($query) {
                $query->orderBy('order');
            }])
                ->where('page_slug', $page_slug)
                ->get()
                ->keyBy('block_slug');
        });

        return $value;
    }
}

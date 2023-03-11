<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use  HasFactory;

    public $table = "gc_games";
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fgId',
        'title',
        'genre',
        'size',
        'dtLastChecked',
        'status',
        'summary',
        'thoughts',
        'issues'
    ];

    // 'fgId',
    // 'title',
    // 'genre',
    // 'size',
    // 'last_checked_at',
    // 'status',
    // 'summary',
    // 'thoughts',
    // 'issues',
// 'platform',
    // 'image',
    // 'graphic_style',
    // 'replayability',
    // 'priority',
    // 'tags',
// 'fg_article_date',
    // 'fg_summary',
    // 'fg_url',

}

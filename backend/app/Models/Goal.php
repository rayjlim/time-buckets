<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use  HasFactory;

    public $table = "tb_goals";
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'priority',
        'reason',
        'note',
        'tags',
        'start_timeframe',
        'end_timeframe',
        'added_at',
        'type'
    ];


}

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
        'type',
        'priority',
        'reason',
        'note',
        'tags',
        'start_timeframe',
        'end_timeframe',
        'added_at',
        'parent_id',
        'gps_zoom'
    ];

    public function parent()
    {
        return $this->belongsTo(Goal::class, 'parent_id', 'id')->select('id', 'title');
    }
}

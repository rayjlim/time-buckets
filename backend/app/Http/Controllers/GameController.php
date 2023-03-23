<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pageSize = is_numeric($request->input('per_page'))
            ? $request->input('per_page')
            : 10;  // DEFAULT page size

        $searchTitle = $request->input('search_title');
        $sizeMinParam = $request->input('size_min');
        $sizeMin = $sizeMinParam && is_numeric($sizeMinParam)
            ? $sizeMinParam
            : 0;
        $sizeMaxParam = $request->input('size_max');
        $sizeMax = $sizeMaxParam && is_numeric($sizeMaxParam)
            ? $sizeMaxParam
            : 1000;

        $games = Game::where('title', 'like', '%'.$searchTitle.'%')
            ->where('size_calculated', '>', $sizeMin)
            ->where('size_calculated', '<', $sizeMax)
            ->paginate($pageSize);

        return $games;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // see https://stackoverflow.com/questions/44001030/laravel-validate-json-object
        $this->validate($request, [
            'title' => 'required',
        ]);

        $game = Game::create($request->all());
        return [
            "status" => 1,
            "data" => $game
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function show(Game $game)
    {
        return [
            "status" => 1,
            "data" =>$game
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Game $game)
    {
        $this->validate($request, [
            'title' => 'required',
            'body' => 'required',
        ]);

        $game->update($request->all());

        return [
            "status" => 1,
            "data" => $game,
            "msg" => "Game updated successfully"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function destroy(Game $game)
    {
        $game->delete();
        return [
            "status" => 1,
            "data" => $game,
            "msg" => "Game deleted successfully"
        ];
    }

    public function removeDuplicates(Request $request){
        $affected = DB::connection('mysql')->select('DELETE t1 FROM gc_games t1
        INNER JOIN gc_games t2
        WHERE
            t1.id > t2.id AND
            t1.fg_url = t2.fg_url;');
        return $affected;
    }
}

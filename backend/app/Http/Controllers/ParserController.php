<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Utility\FgParser;
use Illuminate\Http\Request;
use Log;

class ParserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'source' => 'required',
        ]);

        $parser = new FgParser();
        $source = $request->input('source');
        $parser->parse($source);
        $games = [];
        for ($i = 0; $i < count($parser->articles); $i++){
            $games[] = $parser->getInfo($i);
        }


        Log::info('request source: ' . json_encode($games));

        // TODOimplement duplicate checks before insert to DB
        // $game = Game::create($request->all());

        return [
            "status" => 1,
            "data" => $games
        ];
    }
}

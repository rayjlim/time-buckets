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
        echo "store games" . json_encode($games);
        // TODO: implement duplicate checks before insert to DB
        foreach ($games as $parsed){
            $game = new Game;
            $game->fg_id = $parsed->fg_id;
            $game->title = $parsed->title;
            $game->genre = $parsed->genre;
            $game->size = $parsed->size;
            $game->size_calculated = FgParser::convertSizeString($parsed->size);
            $game->image = $parsed->image;
            $game->fg_url = $parsed->fg_url;
            $time = strtotime($parsed->fg_article_date);
            $game->fg_article_date = date('Y-m-d',$time);

            $game->save();
        }

        return [
            "status" => 1,
            "data" => $games
        ];
    }
}

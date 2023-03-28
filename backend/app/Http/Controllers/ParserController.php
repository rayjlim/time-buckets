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
        Log::info('parser called ');
        $this->validate($request, [
            'source' => 'required',
            'fg_url' => 'required'
        ]);

        $parser = new FgParser();
        $fg_url = $request->input('fg_url');
        Log::info('source for: ' . $fg_url);
        $source = $request->input('source');
        $parser->parse($source);
        $games = [];
        for ($i = 0; $i < count($parser->articles); $i++) {
            $found = $parser->getInfo($i);
            if ($found) {
                Log::info('game: ' . json_encode($found->title));
                $games[] = $found;
            }
        }

        foreach ($games as $parsed) {
            $game = Game::where('fg_url', $parsed->fg_url)->first();

            if (is_null($game)) {
                Log::info('NEW GAME ' . $parsed->title);
                $game = new Game;
                $game->fg_id = $parsed->fg_id;
                $game->title = $parsed->title;
                $game->genre = $parsed->genre;
                $game->size = $parsed->size;
                $game->size_calculated = FgParser::convertSizeString($parsed->size);
                $game->image = $parsed->image;
                $game->fg_url = $parsed->fg_url;
                $time = strtotime($parsed->fg_article_date);
                $game->fg_article_date = date('Y-m-d', $time);
                $game->platform = 1;
                $game->tags = '';

                $game->save();
            } else {
                Log::info('Updating Existing ' . $parsed->title);
                $game->fg_id = $parsed->fg_id;
                $game->title = $parsed->title;
                $game->genre = $parsed->genre;
                $game->size = $parsed->size;
                $game->size_calculated = FgParser::convertSizeString($parsed->size);
                $game->image = $parsed->image;
                $parsed_article_time = strtotime($parsed->fg_article_date);
                $original_time = strtotime($game->fg_article_date);
                $game->fg_article_date = date('Y-m-d', $parsed_article_time);

                if ($parsed_article_time > $original_time) {
                    Log::info('====------Saved-----=====');
                    $game->save();
                }else{
                    Log::info('Not Saved ' . $game->fg_article_date);
                }
            }
        }

        return [
            "status" => 1,
            "data" => $games
        ];
    }
}

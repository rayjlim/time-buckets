<?php

namespace Tests;

use App\Utility\FgParser;

class FgParserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_parse()
    {
        $fullfilename = "/opt/lampp/htdocs/projects/game-collection/backend/tests/fitgirl_page1.html";
        $readtext = file_get_contents($fullfilename,"r");
        $parser = new FgParser();
        $parser->parse($readtext);
        $this->assertEquals(
            count($parser->articles), 9
        );
    }

    public function test_parse_item0(){
        $fullfilename = "/opt/lampp/htdocs/projects/game-collection/backend/tests/fitgirl_page1.html";
        $readtext = file_get_contents($fullfilename,"r");
        $parser = new FgParser();
        $parser->parse($readtext);
        $game = $parser->getInfo(0);

        $this->assertEquals($game->category, 'Lossless Repack');
        $this->assertEquals($game->fgId, '3285');
        $this->assertEquals($game->title, "The Last Spell v1.0.2.7 (Release)");
        $this->assertEquals($game->genre, "RPG, Strategy, Tactics, Isometric, 2D, Turn-based");
        $this->assertEquals($game->size, "707 MB");

        $this->assertEquals($game->image, "https://i2.imageban.ru/out/2023/03/10/7fb3e33d0b59d2658ad0a376fce2a903.jpg");


        // $this->assertEquals($game->fg_url, "https://fitgirl-repacks.site/the-last-stand-aftermath/");
        // $this->assertEquals($game->fg_article_date, "March 10, 2023");


    }

}

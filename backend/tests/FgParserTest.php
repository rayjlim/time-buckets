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
        $fullfilename = getcwd() . "/tests/fitgirl_page1.html";
        $readtext = file_get_contents($fullfilename,"r");
        $parser = new FgParser();
        $parser->parse($readtext);
        $this->assertEquals(
            count($parser->articles), 9
        );
    }

    public function test_parse_item0(){
        $fullfilename =  getcwd() . "/tests/fitgirl_page1.html";
        $readtext = file_get_contents($fullfilename,"r");
        $parser = new FgParser();
        $parser->parse($readtext);
        $game = $parser->getInfo(0);

        $this->assertEquals('Lossless Repack', $game->category);
        $this->assertEquals('3285', $game->fgId);
        $this->assertEquals("The Last Spell v1.0.2.7 (Release)", $game->title);
        $this->assertEquals("RPG, Strategy, Tactics, Isometric, 2D, Turn-based", $game->genre);
        $this->assertEquals("707 MB", $game->size);

        $this->assertEquals("https://i2.imageban.ru/out/2023/03/10/7fb3e33d0b59d2658ad0a376fce2a903.jpg", $game->image);
        $this->assertEquals("March 11, 2023", $game->fg_article_date);
        $this->assertEquals("https://fitgirl-repacks.site/the-last-spell/", $game->fg_url);

    }

    public function test_convertSizeString_item0(){

        $this->assertEquals(".707", FgParser::convertSizeString("707 MB"));
        $this->assertEquals("7.4", FgParser::convertSizeString("7.4 GB"));
        $this->assertEquals(".530", FgParser::convertSizeString("from 530 MB"));
        $this->assertEquals("38.9", FgParser::convertSizeString("38.9\/39.2 GB"));
        $this->assertEquals("5", FgParser::convertSizeString("5~6.6 GB SELECTIVE DOWNLOAD"));
        $this->assertEquals("7.5", FgParser::convertSizeString("SELECTIVE DOWNLOAD 7,5~20 GB"));
        $this->assertEquals("2", FgParser::convertSizeString("2~3 GB (Selective Download)"));
        $this->assertEquals("4.3", FgParser::convertSizeString("4,3~6 GB [Selective Download]"));
        $this->assertEquals(".593", FgParser::convertSizeString("593\/749 MB [Selective Download]"));

    }
}

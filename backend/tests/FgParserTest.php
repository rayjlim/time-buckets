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
        $result = $parser->parse($readtext);
        $this->assertEquals(
            $result, 10
        );
    }
}

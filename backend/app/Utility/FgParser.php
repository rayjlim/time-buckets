<?php

namespace App\Utility;

class FgParser
{


    function parse(string $html){
        $dom = new \DomDocument();
        @ $dom->loadHTML($html);

        //DOMNodeList
        $articles = $dom->getElementsByTagName('article');
        $row_count = $articles->length ;
        // return 0;
        return $row_count;
    }
}

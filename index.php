<?php

class post
{
    public $title;
    public $published;

    public function __construct($title, $published)
    {
        $this->title = $title;
        $this->published = $published;

    }

}

$posts = [

    new post ('My First Post', true),
    new post ('My second Post', true),
    new post ('My third Post', true),
    new post ('My fourth Post', false)

];

/* $unpublishedPosts = array_filter($posts, function($posts){

    return ! $posts->published;

});

$publishedPosts = array_filter($posts, function($posts){

    return  $posts->published;

});

var_dump($publishedPosts); */


/* $modified = array_map(function ($post){

    $post->published = true;
    return $post;

}, $posts);

var_dump($modified); */

$posts = array_map(function($post){
        return (array) $post;
}, $posts);

$titles = array_column($posts, 'title', 'published');

var_dump($titles);

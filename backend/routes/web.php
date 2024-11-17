<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// Route::apiResource('projects', ProjectController::class);
$router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('goals', 'GoalController@index');
    $router->post('goals', 'GoalController@store');
    $router->get('goals/{id}', 'GoalController@show');
    $router->post('goals/{id}', 'GoalController@update');
    // $router->patch('goals/{id}', 'GoalController@update');
    $router->delete('goals/{id}', 'GoalController@destroy');
});


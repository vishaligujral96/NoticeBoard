<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('notice','NoticeController@index');

Route::get('notice/{id}','NoticeController@show');

Route::post('notice','NoticeController@store');

Route::put('notice','NoticeController@store');
Route::delete('notice/{id}','NoticeController@destroy');


Route::group([

    
    'prefix' => 'auth'

], function () {
    Route::post('login', [ 'as' => 'login', 'uses' => 'AuthController@login']);
    // Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('payload', 'AuthController@payload');

});


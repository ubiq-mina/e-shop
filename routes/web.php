<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/home', 'HomeController@store');
Route::delete('/home/delete', 'HomeController@remove');

Auth::routes();
Route::resource('products', 'ProductController');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/cart', 'HomeController@cart')->name('cart');

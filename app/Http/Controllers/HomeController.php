<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Cart;
use App\Product;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store()
    {
        Cart::add([
            'id' => $_POST['id'],
            'name' => $_POST['name'],
            'qty' => 1,
            'price' => $_POST['price']
        ]);
        echo Cart::content();
    }

    public function remove()
    {
        $rowId = $_DELETE['rowId'];
        Cart::remove($rowId);
        echo Cart::contents();
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        Cart::destroy();

        // foreach ($products as $product) {
        //     Cart::add([
        //         'id' => $product->id,
        //         'name' => $product->name,
        //         'qty' => 1,
        //         'price' => $product->price
        //     ]);
        // }

        return view('home', ['products' => $products]);
    }
}

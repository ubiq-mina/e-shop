<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function handle()
    {
        $command = $_POST['command'];

        switch (command) {
            case 0: // Get cart items
                return getItems();
                break;
            case 1: // Add cart item
                $item = $_POST['item'];
                if ($item) {
                    return addItem($item);
                }
                break;
            case 2: // Remove cart item
                $id = $_POST['id'];
                if ($id) {
                    return removeItem($id);
                }
                break;
        }
    }

    public function addItem()
    {
        Cart::add([
            'id' => $_POST['id'],
            'name' => $_POST['name'],
            'qty' => 1,
            'price' => $_POST['price']
        ]);
    }

    public function removeItem()
    {

    }

    public function getItems()
    {

    }
}
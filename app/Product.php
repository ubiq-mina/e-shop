<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Buyable;

class Product extends Model implements Buyable
{
    public function getBuyableIdentifier($options = null) {
        return id;
    }

    public function getBuyableDescription($options = null) {
        return name;
    }

    public function getBuyablePrice($options = null) {
        return price;
    }
}

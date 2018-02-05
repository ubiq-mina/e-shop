<?php

use Faker\Generator as Faker;

use App\Product;

$factory->define(Product::class, function (Faker $faker) {

    $min = 1;
    $max = 100;

    return [
        'name' => $faker->word,
        'category_id' => 1,
        'price' => mt_rand ($min*10, $max*10) / 10,
    ];
});

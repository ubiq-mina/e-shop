<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

use App\User;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testUserLoginsSuccessfully()
    {
        if (!User::where('email', 'hello@world.com')->first()) {
            $user = new User;
            $user->email = 'hello@world.com';
            $user->first_name = 'Hello';
            $user->last_name = 'World';
            $user->password = bcrypt('hellow');

            $user->save();
        }

        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                    ->type('email', 'hello@world.com')
                    ->type('password', 'hellow')
                    ->assertSee('Login')
                    ->press('Login')
                    ->assertPathIs('/home');
        });
    }
}

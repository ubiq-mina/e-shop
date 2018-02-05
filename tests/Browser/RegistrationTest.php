<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegistrationTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testUserRegistersCorrectly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/register')
                    ->type('first_name', 'Hello')
                    ->type('last_name', 'World')
                    ->type('email', 'hello@world.com')
                    ->type('password', 'hellow')
                    ->type('password_confirmation', 'hellow')
                    ->assertSee('Register')
                    ->press('Register');
            
        });
        $this->assertDatabaseHas('users', ['email' => 'hello@world.com']);
    }
}

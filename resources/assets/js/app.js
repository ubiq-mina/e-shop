
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.axios = require('axios');
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var bus = new Vue();

Vue.mixin({
    data() {
        return {
            get bus() {
                return bus;
            }
        }
    }
})

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('product-item', require('./components/ProductItem.vue'));
Vue.component('shopping-cart', require('./components/ShoppingCart.vue'));
Vue.component('cart-item', require('./components/CartItem.vue'));


const app = new Vue({
    el: '#app',
    data() {
        return {
            cart: [],
            // bus: new Vue()
        }
    }
});

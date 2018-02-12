<template>
    <div class="product-item" :data-id="product.id" :data-row="product.rowId">
        <p class="item-name">
            {{ product.name }}
        </p>
        <p class="item-price">
            {{ product.price }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ProductItem',
        props: {
            product: Object
        },
        methods: {
            addToCart: function() {
                var params = new URLSearchParams();
                params.append('id', this.product.id);
                params.append('name', this.product.name);
                params.append('price', this.product.price);

                axios.post('/home', params)
                .then(function (response) {
                    // console.log(response);
                    console.log('ProductItem: Item added!');
                    // this.$emit('itemAdded');
                    bus.$emit('itemAdded');
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>

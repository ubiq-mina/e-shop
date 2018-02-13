<template>
    <div class="product-item" :data-id="product.id" :data-row="product.rowId" @click="addToCart">
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
            product: Object,
            // bus: Object
        },
        methods: {
            addToCart: function (event) {
                var params = new URLSearchParams();
                params.append('id', this.product.id);
                params.append('name', this.product.name);
                params.append('price', this.product.price);

                axios.post('/home', params)
                .then(response => {
                    if (response.status == 200) {
                        console.log('ProductItem: Item added!');
                        this.bus.$emit('itemAdded');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

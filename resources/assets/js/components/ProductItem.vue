<template>
    <a href="#">
        <div class="product-item" :data-id="product.id" :data-row="product.rowId">
            <p class="item-name">
                {{ product.name }}
            </p>
            <p class="item-price">
                {{ product.price }}
            </p>
        </div>
    </a>
</template>

<script>
    export default {
        name: 'ProductItem',
        data () {
            return {

            }
        },
        props: ["product"]
    }
</script>

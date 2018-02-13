<template>
    <tr class='cart-item'>
        <td class='item-name'>
            {{ product.name }}
        </td>
        <td class='item-price'>
            {{ product.price }}
        </td>
        <td class='item-quantity'>
            <input type='number' class='form-control' min='1' max='99' :value="product.qty">
        </td>
        <td class='item-remove'>
            <button class='close'>&times;</button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'CartItem',
        props: {
            product: Object
        },
        methods: {
        }
    }
</script>

<template>
    <div id="cart-view" class="modal fade">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Cart contents</h3>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-inverse">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="cart-contents">
                            <cart-item 
                                v-for="product in products"
                                v-bind:product="product" 
                                v-bind:key="product.id">
                            </cart-item>
                        </tbody>
                    </table>
                    <!-- <div id="cart-computations">
                        Subtotal
                        <h3 id="cart-subtotal">
                            $0.00
                        </h3>
                        Total
                        <h3 class="mt-0" id="cart-total">
                            $0.00
                        </h3>
                    </div> -->
                    <cart-computations v-bind:cart-subtotal="cart-subtotal"></cart-computations>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Checkout</button>
                    <button type="button" class="btn btn-danger">Clear</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'cart-items'
        ],
    }
</script>

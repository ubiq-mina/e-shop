
$(document).ready(function() {
    var cart = []
    var bus = new Vue()

    // $('.product-item').on('click', function() {
    //     $.ajax({
    //         'headers': {
    //           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //         },
    //         'url': '/home',
    //         'method': 'post',
    //         'beforeSend': console.log("Sending..."),
    //         'data': {
    //             'id': $(this).data('id'),
    //             'name': $(this).find('.item-name').text(),
    //             'price': parseFloat($(this).find('.item-price').text())
    //         },
    //         'success': function(data) {
    //             console.log("Success!");
    //             cart = JSON.parse(data);
    //             refreshCart(cart);
    //         },
    //         'error': function(data) {
    //             console.log(data);
    //         }
    //     });
    // });
    
    $('.shopping-cart').on('click', '.item-remove', function() {
        if (cart.length <= 0) {
            $.ajax({
                'headers': {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                'url': '/home/delete',
                'method': 'delete',
                'beforeSend': console.log("Removing item..."),
                'data': {
                    'rowId': $(this).data('row'),
                },
                'success': function(data) {
                    console.log("Success!");
                    cart = JSON.parse(data);
                    refreshCart(cart);
                },
                'error': function(data) {
                    console.log(data);
                }
            });
        }
    });

    $('#cart-subtotal').on('change', function() {
        var subtotal = 0;
        console.log(cart);
        $.each(cart, function(key, value) {
            console.log('Checking...');
            subtotal += value['price'] * value['qty'];
        });
        $(this).text('$' + (subtotal).toFixed(2));
        // $('#cart-total').change(subtotal);
        $('#cart-total').trigger('change', [{subtotal : subtotal}]);
    });

    $('#cart-total').on('change', function(event, data) {
        $(this).text('$' + data.subtotal.toFixed(2));
    })
 
})

function refreshCart(cart) {
    if (cart.length == 0) {
        return;
    }

    $('#cart-contents').empty();
    $.each(cart, function(key, value) {
        console.log('Adding item...');
        $('<tr/>', {
            class: 'cart-item',
        })
        .append(
            $('<td/>', {
                text: value['name'],
                class: 'item-name'
            })
        )
        .append(
            $('<td/>', {
                class: 'item-price'
            })
            .on('change', function() {
                $(this).text('$' + (value['price'] * value['qty']).toFixed(2))
            }).change()
        )
        .append(
            $('<td/>', {
                class: 'item-quantity'
            })
            .append(
                $('<input/>', {
                    type: 'number',
                    class: 'form-control',
                    min: '1',
                    max: '99'
                })
                .on('change', function() {
                    if ($(this).val() != "") {
                        value['qty'] = $(this).val();
                    }
                    else {
                        $(this).val(1);
                    }
                    $(this).parent().siblings('.item-price').change();
                    $('#cart-subtotal').change();
                }).change()
            )
        )
        .append(
            $('<td/>', {
                class: 'item-remove'
            })
            .append(
            $('<button/>', {
                html: '&times;',
                class: 'close'
            })
            )
        )
        .appendTo('#cart-contents');
        
        console.log('Added!');
    });
}
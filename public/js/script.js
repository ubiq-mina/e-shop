
$(document).ready(function() {
    var cart = []

    $('.product-item').on('click', function() {
        $.ajax({
            'headers': {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            'url': '/home',
            'method': 'post',
            'beforeSend': console.log("Sending..."),
            'data': {
                'id': $(this).data('id'),
                'name': $(this).find('.item-name').text(),
                'price': parseFloat($(this).find('.item-price').text())
            },
            'success': function(data) {
                console.log("Success!");
                items = JSON.parse(data);
                refreshCart(items);
            },
            'error': function(data) {
                console.log(data);
            }
        });
    });
    
    $('.shopping-cart').on('click', '.item-remove', function() {
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
                items = JSON.parse(data);
                refreshCart(items);
            },
            'error': function(data) {
                console.log(data);
            }
        });
    });
 
})

function refreshCart(items) {
    if (items.length == 0) {
        return;
    }

    $('#cart-contents').empty();
    $.each(items, function(key, value) {
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
                text: '$' + value['price'],
                class: 'item-price'
            })
        )
        .append(
            $('<td/>', {
                // text: 'x' + value['qty'],
                class: 'item-quantity'
            })
            .append(
                // <input class="form-control" type="number" value="42" id="example-number-input">
                $('<input/>', {
                    type: 'number',
                    class: 'form-control',
                    min: '1',
                    max: '99',
                    value: value['qty']
                })
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
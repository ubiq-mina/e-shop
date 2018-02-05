
$(document).ready(function() {

    console.log()

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
                // console.log(data);
                items = JSON.parse(data);
                refreshCart(items);
            },
            'error': function(data) {
                console.log(data);
            }
        });
    })
    
})

function refreshCart(items) {
    if (items.length == 0) {
        return;
    }

    $('.shopping-cart').empty();
    $.each(items, function(key, value) {
        $('<div/>', {
            class: 'cart-item',
            text: value['id'] + ': ' + value['name'] + ' - $' + value['price'] + ' x' + value['qty']
        })
        .append(
            $('<button/>', {
                class: 'item-remove'
            })
        )
        .appendTo('.shopping-cart');
    });
}
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">View product</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <h1>{{ $product->name }}</h1>
                    <h3>${{ $product->price }}</h3>

                    <div class="product-item" data-id={{ $product->id }} data-row={{ $product->rowId }}>
                        <p class="item-name">
                            {{ $product->name }}
                        </p>
                        <p class="item-price">
                            {{ $product->price }}
                        </p>
                    </div>

                    <button class="btn btn-default">Add to cart</button>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection

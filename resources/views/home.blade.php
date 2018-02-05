@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!

                    <div class="products">
                        @foreach ($products as $product)
                            <div class="product-item" data-id={{ $product->id }}>
                                <p class="item-name">
                                    {{ $product->name }}
                                </p>
                                <p class="item-price">
                                    {{ $product->price }}
                                </p>
                            </div>
                        @endforeach
                    </div>

                    <div class="shopping-cart">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

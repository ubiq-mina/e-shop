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
                            {{--  <a href="#">
                                <div class="product-item" data-id={{ $product->id }} data-row={{ $product->rowId }}>
                                    <p class="item-name">
                                        {{ $product->name }}
                                    </p>
                                    <p class="item-price">
                                        {{ $product->price }}
                                    </p>
                                </div>
                            </a>  --}}
                            <product-select-component :product='{{ $product }}'></product-select-component>
                        @endforeach
                    </div>

                    {{--  <div class="shopping-cart">
                    </div>  --}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

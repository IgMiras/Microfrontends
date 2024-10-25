import React from 'react';

import { CartProvider, useCart } from "cart/CartContext";

const Home = () => {
    const { cart } = useCart();
    console.log(cart);
    return <h1>Home</h1>
}

const WrappedHome = () => {
    return (
        <CartProvider>
            <Home />
        </CartProvider>
    )
}

export default WrappedHome;
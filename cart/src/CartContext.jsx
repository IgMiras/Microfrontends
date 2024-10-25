import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                removeFromCart,
                cartTotal: cart.reduce((total, product) => total + product.quantity, 0)
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export { CartProvider, useCart };
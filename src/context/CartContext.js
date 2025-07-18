import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
    // Open Bootstrap offcanvas if present
    const cartOffcanvas = document.getElementById('modalMiniCart');
    if (cartOffcanvas && window.bootstrap) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvas);
      bsOffcanvas?.show();
    }
  };
  const closeCart = () => setCartOpen(false);

  return (
    <CartContext.Provider value={{ isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}; 
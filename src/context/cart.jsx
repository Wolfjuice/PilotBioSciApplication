import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// Helper to create a unique key per variant
const getCartItemId = (productId, sku) => `${productId}-${sku}`;

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_v2');
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  });

  useEffect(() => {
    localStorage.setItem('cart_v2', JSON.stringify(items));
  }, [items]);

  // Modified: addToCart now accepts product, variant (optional), and qty
  const addToCart = (product, variant = null, qty = 1) => {
    // If no variant is provided, use the product's default price
    const usedVariant = variant || { sku: product.id, size: 'Default', price: product.price };
    const cartId = getCartItemId(product.id, usedVariant.sku);

    setItems(prev => {
      const existing = prev.find(item => item.cartId === cartId);
      if (existing) {
        return prev.map(item =>
          item.cartId === cartId ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [
        ...prev,
        {
          cartId,
          productId: product.id,
          title: product.title,
          image: product.image,
          variant: usedVariant,
          qty: qty,
        }
      ];
    });
  };

  const removeFromCart = (cartId) => setItems(prev => prev.filter(item => item.cartId !== cartId));

  const updateQty = (cartId, qty) => {
    setItems(prev => prev.map(item =>
      item.cartId === cartId ? { ...item, qty: Math.max(1, qty) } : item
    ));
  };

  const clear = () => setItems([]);

  // Compute total: sum of (variant.price * qty)
  const total = items.reduce((sum, item) => {
  // Prefer variant.price, fallback to item.price (for old cart items)
    const price = item.variant?.price ?? item.price ?? 0;
    return sum + price * item.qty;
  }, 0);
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
};
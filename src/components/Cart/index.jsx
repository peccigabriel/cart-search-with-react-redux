import React, { useState } from 'react';
import CartButton from '../Cart/CartButton';
import CartList from '../Cart/CartList';

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CartButton setCartOpen={setCartOpen} cartOpen={cartOpen} />
      {cartOpen && (
        <CartList setCartOpen={setCartOpen} cartOpen={cartOpen} />
        )}
    </>
  );
};

export default Cart;

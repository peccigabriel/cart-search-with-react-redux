import React from 'react';
import { ReactComponent as IconCart } from '../../../assets/svg/Shape.svg';
import { useSelector } from 'react-redux';

import './cartButton.scss';

const CartButton = ({ setCartOpen, cartOpen }) => {
  const cartItens = useSelector((state) => state.cart);
  const showCart = () => setCartOpen(!cartOpen);

  return (
    <>
      {!cartOpen && (
        <button className="cart-button" onClick={showCart}>
          {cartItens?.cart.length > 0 ? (
            <div className="cart-button__qntd">
              <span>{cartItens?.cart.length}</span>
            </div>
          ) : (
            <IconCart className="cart-button__icon" />
          )}
        </button>
      )}
    </>
  );
};

export default CartButton;

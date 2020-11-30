import React from 'react';
import './cartFooter.scss';
import { useSelector } from 'react-redux';

const CartFooter = () => {
  const totalAmount = useSelector((state) => {
    const { cart } = state.cart;
    if (cart.length > 0) {
      const value = cart.reduce(
        (prev, curr) => curr.price * curr.quantity + prev,
        0,
      );
      return value;
    }
  });

  return (
    <div className="cart-footer">
      <span>Valor total: </span>
      <span>
        {totalAmount
          ? totalAmount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          : 'R$ 0,00'}
      </span>
    </div>
  );
};

export default CartFooter;

import React from 'react';
import QuantityButton from '../QuantityButton';
import './cartInfos.scss';

const CartInfos = ({ item, index }) => {
  return (
    <div className="cart-infos">
      <img src={item.image} alt={item.name} />
      <span className="cart-infos__name">{item.name}</span>
      <span>
        {(item.price * item.quantity || 1).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
      <QuantityButton
        stock={item.stock}
        index={index}
        quantity={item.quantity}
      />
      {item.quantity === item.stock && (
        <span className="cart-infos__stock">
          Esse item não possui mais unidades em estoque.
        </span>
      )}
    </div>
  );
};

export default CartInfos;

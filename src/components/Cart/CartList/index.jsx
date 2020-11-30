import React from 'react';
import { ReactComponent as IconClose } from '../../../assets/svg/Close.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartInfos from '../CartInfos';
import CartFooter from '../CartFooter';

import './cartList.scss';

const CartList = ({ setCartOpen, cartOpen }) => {
  const showCart = () => setCartOpen(!cartOpen);
  const cartItens = useSelector((state) => state.cart);

  return (
    <div className="cartlist">
      <div className={cartOpen ? 'cartlist__menu active' : 'cartlist__menu'}>
        <ul className="cartlist__header">
          <li className="cartlist__toggle">
            <Link onClick={showCart} className="cartlist__bars">
              <IconClose />
            </Link>
          </li>
        </ul>
        {cartItens?.cart.length > 0 ? (
          cartItens?.cart.map((item, index) => {
            return (
              <div key={index} className="cartlist__itens">
                <CartInfos item={item} index={index} />
              </div>
            );
          })
        ) : (
          <span className="cartlist__empty">Não existem itens no carrinho</span>
        )}
      </div>
      <CartFooter />
    </div>
  );
};

export default CartList;

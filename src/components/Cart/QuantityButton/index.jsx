import React from 'react';
import { ReactComponent as IconTrash } from '../../../assets/svg/Trash.svg';
import { ReactComponent as IconMinus } from '../../../assets/svg/Minus.svg';
import { ReactComponent as IconPlus } from '../../../assets/svg/Plus.svg';
import { useDispatch } from 'react-redux';
import {
  ADD_QUANTITY,
  REMOVE_CART,
  REMOVE_QUANTITY,
} from '../../../store/actions/actionsType';

import './quantityButton.scss';

const QuantityButton = ({ stock, index, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="quantity-btn">
      <button
        onClick={() =>
          dispatch({
            type: REMOVE_CART,
            index,
          })
        }
      >
        <IconTrash className="quantity-btn__trash" />
      </button>
      <div>
        <button
          disabled={quantity === 1}
          onClick={() =>
            dispatch({
              type: REMOVE_QUANTITY,
              index,
            })
          }
        >
          <IconMinus className="quantity-btn__minus" />
        </button>
        <span className="quantity-btn__span">{quantity}</span>
        <button
          disabled={quantity === stock}
          onClick={() =>
            dispatch({
              type: ADD_QUANTITY,
              index,
            })
          }
        >
          <IconPlus className="quantity-btn__plus" />
        </button>
      </div>
    </div>
  );
};

export default QuantityButton;

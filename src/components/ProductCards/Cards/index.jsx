import React from 'react';
import { ReactComponent as IconCart } from '../../../assets/svg/Shape.svg';
import { useDispatch } from 'react-redux';
import { ADD_CART } from '../../../store/actions/actionsType';
import './cards.scss';

const Cards = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="cards" key={item.id}>
            <div className="cards__image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cards__text">
              <div className="cards__text--infos">
                <p>{item.name}</p>
                <span>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
              <button
                onClick={() =>
                  dispatch({
                    type: ADD_CART,
                    cart: {
                      id: item.id,
                      image: item.image,
                      name: item.name,
                      price: item.price,
                      stock: item.stock,
                      quantity: 1,
                    },
                  })
                }
              >
                <IconCart className="cards__text--cart" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

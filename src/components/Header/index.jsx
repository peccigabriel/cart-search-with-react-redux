import React, { useState } from 'react';
import './header.scss';
import { ReactComponent as IconSearch } from '../../assets/svg/Search.svg';
import { useDispatch } from 'react-redux';
import Cart from '../../components/Cart';
import Logo from '../../assets/logo/logo.png';
import { SEARCH_TEXT } from '../../store/actions/actionsType';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    dispatch({ type: SEARCH_TEXT, term: term.trim() });
  }

  return (
    <div className="header">
      <div className="header-content">
        <img src={Logo} alt="logo da KaBuM!" />
        <div className="header-search">
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              placeholder="Busque um produto inserindo seu nome ou id"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="header-search__input"
              type="text"
            />
            <IconSearch
              className="header-search__find"
              onClick={(e) => handleSearch(e)}
            />
          </form>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={handleAuthenticaton}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong> ${getBasketTotal(basket).toFixed(2)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={() => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
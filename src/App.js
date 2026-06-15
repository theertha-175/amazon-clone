import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Tg9FWPQdVetGrxT4xn29AxYeWUpHDZZpUfIRka9FEOHsM3hUCJVfnGflrvqIdIkXjS58JggZ1LOnlBkSZuPpw6800nLNos9TW');

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={
            <Elements stripe={promise}>
              <><Header /><Payment /></>
            </Elements>
          } />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
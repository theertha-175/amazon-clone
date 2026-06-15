import React, { useState, useEffect } from 'react';
import './Orders.css';
import Header from './Header';
import { db } from './firebase';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'users', user.uid, 'orders'),
        orderBy('created', 'desc')
      );
      onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <Header />
      <div className="orders__container">
        <h1>Your Orders</h1>
        {orders.map((order) => (
          <div key={order.id} className="order">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Total:</strong> ${(order.data.amount / 100).toFixed(2)}</p>
            <p><strong>Date:</strong> {new Date(order.data.created * 1000).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
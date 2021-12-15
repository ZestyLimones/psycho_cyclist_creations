import React from 'react';
import ItemList from '../components/ItemList';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <ItemList />
      <Cart />
    </div>
  );
};

export default Home;

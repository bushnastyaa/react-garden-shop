import React from 'react';
import HeadDiscount from '../../components/HeadDiscount/HeadDiscount';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';


const Home: React.FC = () => {
  
  return (
    <main>
      <HeadDiscount />
      <HomeCategories />
      <DiscountForm />
      <Sale />
    </main>
  );
};

export default Home;
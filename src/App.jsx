import { useState } from 'react'
import './App.css'
import './assets/fonts/fonts.css'
import Navbar from './Navbar/Navbar';
import ProductList from './Products/ProductList';
import Banner from './Banner/Banner';
import FeaturedItem from './Banner/FeaturedItems';

function App() {
  return ( 
    <>
      <Navbar />
      <Banner />
      <FeaturedItem />
      <div className="container mt-5">
        <ProductList />
      </div>
    </>
  );
}

export default App


import Navbar from '../Navbar/Navbar';
import ProductList from '../Products/ProductList';
import Banner from '../Banner/Banner';
import FeaturedItem from '../Banner/FeaturedItems';

function HomePage() {
  return ( 
    <>
      <Banner />
      <FeaturedItem />
      <div className="container mt-5">
        <ProductList />
      </div>
    </>
  );
}

export default HomePage

import Navbar from '../Navbar/Navbar';
import ProductList from '../Products/ProductList';
import Banner from '../Banner/Banner';
import FeaturedItem from '../Banner/FeaturedItems';
import Brands from '../Banner/Brands';

function HomePage() {
  return ( 
    <>
      <Banner />
      <Brands />
      <FeaturedItem />
      <hr />
      <div className="container ">
        <ProductList />
      </div>
    </>
  );
}

export default HomePage
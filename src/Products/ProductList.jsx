import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/axios';
//api keys
//1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65
//fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1
function ProductList() {
  const [products, setProducts] = useState([]);
  const [productListLoading, setProductListLoading] = useState(true); 

  useEffect(() => {
    API.get(`/products?categoryid=21508&per_page=18`)
      .then(res => {
        let productsData = [];
        if(res.data.data.data.length){
            res.data.data.data.map((products,index)=>{
                let extra_info = products.extra_info ? JSON.parse(products.extra_info) : [];
                productsData[index] = extra_info;
            })
        }
        setProductListLoading(false);
        setProducts(productsData)
      })
      .catch(err => {
        console.error(err);
        setProductListLoading(false); 
      });
  }, []);

  if (productListLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row" style={{marginTop: '50px'}}>
      <h5 className='text-decoration-underline text-center text-md-left w-100'>The Classics</h5>
      {products.map(product => (
          <div className="col-lg-2 col-md-4 col-sm-4 col-sx-6 col-6 mb-4 position-relative" key={product.id}>
            <Link to={`/product-details/${product.url}`} >
              <div className="card h-100">
                <img
                  src={`https://${product.imageUrl}`}
                  className="card-img-top p-3"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body position-relative">
                  {/* <a href="#"><h6 className="card-title">{product.name}</h6></a> */}
                  <span className='product-link'><h6 className="mb-0">
                    <span className="text-truncate d-inline-block" style={{ maxWidth: '100%' }} title={product.name}>
                      {product.name}
                    </span>
                  </h6></span>
                  <p className="s-f-size">Brand: {product.brandName}</p>
                  <p className="fw-bold text-success position-absolute bottom-0 mb-2">{product.price.current.text}</p>
                </div>
              </div>
            </Link>
          </div>
      ))}
    </div>
  );
}

export default ProductList;

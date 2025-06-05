import { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [productListLoading, setProductListLoading] = useState(true); 

  useEffect(() => {
    fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=2623&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        'X-RapidAPI-Key': '1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65' 
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductListLoading(false);
        setProducts(data.products)
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
    <div className="row" style={{marginTop: '100px'}}>
      <h6>Women's New In: Clothing</h6>
      {products.map(product => (
        <div className="col-lg-2 col-md-4 col-sm-4 col-sx-6 col-6 mb-4 position-relative" key={product.id}>
          <div className="card h-100">
            <img
              src={`https://${product.imageUrl}`}
              className="card-img-top p-3"
              alt={product.name}
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body position-relative">
              {/* <a href="#"><h6 className="card-title">{product.name}</h6></a> */}
              <a href="#" className='product-link'><h6 className="mb-0">
                <span className="text-truncate d-inline-block" style={{ maxWidth: '100%' }} title={product.name}>
                  {product.name}
                </span>
              </h6></a>
              <p className="s-f-size">Brand: {product.brandName}</p>
              <p className="fw-bold text-success position-absolute bottom-0 mb-2">{product.price.current.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

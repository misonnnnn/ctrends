import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
//api keys
//1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65
//fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1

function ProductPage() {
  const { categoryId } = useParams()
  const [productList , setProductList] = useState([]);
  const [isProductHoveredIndex, setIsProductHoveredIndex] = useState(null)

  useEffect(()=>{
    setProductList([])
    fetch(`https://lightsalmon-otter-774319.hostingersite.com/asos/v1/products?categoryid=${categoryId}&per_page=100`,{
      method:'GET',
      headers: {
        
      },
    })
    .then(res => res.json())
    .then(data =>{
        let productsData = {
          category_name: data.category_name,
          product_list: [] // ← make this an array
        };

        if (data.data.data.length) {
          data.data.data.forEach((product, index) => {
              let extra_info = product.extra_info ? JSON.parse(product.extra_info) : [];
              productsData.product_list.push(extra_info); 
          });
      }
      console.log(productsData);
      setProductList(productsData);
    })
  }, [categoryId])


  if (productList.length <= 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return ( 
    <>
      <div className="" style={{marginTop:'20px'}}>
        <div>
          {/* <hr /> */}
          <div className="container-fluid">
            <h6 className="text-uppercase px-2">{productList.category_name}</h6>
            {
              productList.product_list?.map((product, productIndex) => {
                const isProductHovered = isProductHoveredIndex === productIndex;
                return(
                  <div className="d-inline-block" key={productIndex}>
                    <div className={`position-relative m-1 card p-2 pb-5`} style={{width:'200px'}}>
                      <div className="w-100 ">
                        <img src={isProductHovered ? `https://${product.additionalImageUrls[0]}` : `https://${product.imageUrl}`} className="w-100" alt="" 
                        onMouseEnter={() => setIsProductHoveredIndex(productIndex)}
                        onMouseLeave={() => setIsProductHoveredIndex(null)}
                        />
                      </div>
                      <p className="m-0 s-f-size text-truncate primary_color fw-bold" title={product.name}>{product.name}</p>
                      <p className="fw-bold text-success position-absolute bottom-0 mb-1">{product.price.current.text} <span className="text-muted s-f-size fw-normal">{product.price.currency} </span></p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage
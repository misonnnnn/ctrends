import { useLocation, useParams } from "react-router-dom"

function ProductDetails(){
    const location = useLocation();
    const path = location.pathname+location.hash
    const productPath = path.startsWith('/') ? path.slice(1) : path;

  return (
    <>
        <span>{productPath}</span>
    </>
  );
    
}   


export default ProductDetails
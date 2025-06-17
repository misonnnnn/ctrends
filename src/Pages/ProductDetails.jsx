import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import config from "../config";
import PageNotFound from "./PageNotFound";
import LoadingDiv from "../utils/LoadingDiv";
import '../product-details.css'

function ProductDetails(){
    const location = useLocation();
    const path = location.pathname; 
    const cleanedPath = path.replace(/^\/?product-details\/?/, '');
    const api_url = `${config.API_URL}/asos/v1/products/details/${cleanedPath}`;


    const [isProductLoaded, setIsProductLoaded] = useState(false);
    const [isProductNotFound, setIsProductNotFound] = useState(false);

    const [thumbnails, setThumbnails] = useState([]);
    

    const [mainImage, setMainImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("black");

    const [productName, setProductName] = useState(null)
    const [productPrice, setProductPrice] = useState('$0')
    const [productBrand, setProductBrand] = useState(null)

    const changeImage = (src, index) => {
        setMainImage(src);
        setActiveIndex(index);
    };
    
    useEffect(()=>{
        fetch(api_url,{
            method:'GET',
        }).then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.success){
                setMainImage(`https://${data.data.imageUrl}`)
                setIsProductLoaded(true);
                const additionalImageUrls = [`https://${data.data.imageUrl}`];
                data.data.additionalImageUrls.forEach(imageUrlsPath => {
                    additionalImageUrls.push(`https://${imageUrlsPath}`)
                });
                setThumbnails(additionalImageUrls);
                setProductName(data.data.name);
                setProductPrice(data.data.price.current.text)
                setProductBrand(data.data.brandName)
            }else{
                setIsProductNotFound(true)
            }
        })
    }, [])

    if(isProductLoaded){
         return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        {/* Product Images */}
                        <div className="col-md-7 mb-2">
                            <img
                                src={mainImage}
                                alt="Product"
                                className="img-fluid rounded mb-3 product-image"
                                id="mainImage"
                            />
                            <div className="d-flex justify-content-between">
                                {thumbnails.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail rounded ${activeIndex === index ? 'border border-primary' : ''}`}
                                    style={{ width: '20%', cursor: 'pointer' }}
                                    onClick={() => changeImage(src, index)}
                                />
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="col-md-6">
                            <h2 className="mb-3">{productName}</h2>
                            <p className="text-muted mb-4">{productBrand}</p>
                            <div className="mb-3">
                                <span className="h4 me-2">{productPrice}</span>
                                {/* <span className="text-muted">
                                <s>$399.99</s>
                                </span> */}
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-half text-warning"></i>
                                <span className="ms-2">4.5 (120 reviews)</span>
                            </div>
                            <p className="mb-4">
                                Experience premium sound quality and industry-leading noise cancellation with these wireless
                                headphones. Perfect for music lovers and frequent travelers.
                            </p>

                            <div className="mb-4">
                                <h5>Color:</h5>
                                <div className="btn-group" role="group">
                                {["black", "silver", "blue"].map((clr) => (
                                    <div key={clr}>
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="color"
                                            id={clr}
                                            autoComplete="off"
                                            checked={color === clr}
                                            onChange={() => setColor(clr)}
                                        />
                                        <label
                                            className={`btn btn-outline-${clr === "black" ? "dark" : clr}`}
                                            htmlFor={clr}
                                        >
                                            {clr.charAt(0).toUpperCase() + clr.slice(1)}
                                        </label>
                                    </div>
                                ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="quantity" className="form-label">
                                Quantity:
                                </label>
                                <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                value={quantity}
                                min="1"
                                style={{ width: "80px" }}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                />
                            </div>

                            <button className="btn btn-primary btn-lg mb-3 me-2">
                                <i className="bi bi-cart-plus"></i> Add to Cart
                            </button>
                            <button className="btn btn-outline-secondary btn-lg mb-3">
                                <i className="bi bi-heart"></i> Add to Wishlist
                            </button>

                            <div className="mt-4">
                                <h5>Key Features:</h5>
                                <ul>
                                    <li>Industry-leading noise cancellation</li>
                                    <li>30-hour battery life</li>
                                    <li>Touch sensor controls</li>
                                    <li>Speak-to-chat technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else if(isProductNotFound){
            return <PageNotFound />
    } else{
        return <LoadingDiv />
    }
    
}   


export default ProductDetails
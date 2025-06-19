
import { useEffect, useState } from "react";
import API from "../utils/axios";
import '../featured-products.css';
//api keys
//1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65
//fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1
function FeaturedItem(){
    const [featuredProducts, setfeaturedProducts] = useState([]);
    const [featuredListLoading, setfeaturedListLoading] = useState(true); 

    const featuredIteamCategoryID = 12949;
    useEffect(() => {
        API.get(`products?categoryid=${featuredIteamCategoryID}&per_page=4`)
        .then(res => {
            let productsData = [];
            if(res.data.data.data.length){
                res.data.data.data.map((products,index)=>{
                    let extra_info = products.extra_info ? JSON.parse(products.extra_info) : [];
                    productsData[index] = extra_info;
                })
            }
            
            setfeaturedListLoading(false);
            setfeaturedProducts(productsData)
        })
        .catch(err => {
            console.error(err);
            setfeaturedListLoading(false); 
        });
    }, []);

    if (featuredListLoading) {
        return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
            <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        );
    }


    return (
        <div className="container py-5 ">
            <div className="p-5">
                <h5 className="text-center">Our Featured Items</h5>
                <p className="text-center">Timeless pieces. Effortless style. Explore our featured collection crafted for those who wear confidence every day.</p>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75">
                    <div className="row">
                        {featuredProducts?.map(featuredProduct => {
                            console.log(featuredProduct);
                            return (
                                <div className="col-lg-3 col-md-3 col-6 mx-auto" key={featuredProduct.id}>
                                    <div className="position-relative test ">
                                        
                                        <div className="card shadow rounded-3 featuredProduct2 featuredProduct">
                                            <img src={`https://${featuredProduct.additionalImageUrls[0]}`} alt="" />
                                        </div>
                                        <div className="card shadow rounded-3 featuredProduct3 featuredProduct">
                                            <img src={`https://${featuredProduct.additionalImageUrls[1]}`} alt="" />
                                        </div>
                                        <div className="card shadow rounded-3 featuredProduct1 featuredProduct">
                                            <img src={`https://${featuredProduct.imageUrl}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeaturedItem
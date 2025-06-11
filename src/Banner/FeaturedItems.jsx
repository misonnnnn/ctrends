
import { useEffect, useState } from "react";
//api keys
//1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65
//fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1
function FeaturedItem(){
    const [featuredProducts, setfeaturedProducts] = useState([]);
    const [featuredListLoading, setfeaturedListLoading] = useState(true); 

    // useEffect(() => {
    //     fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=12949&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=4&lang=en-US',{
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json', 
    //         'X-RapidAPI-Key': 'fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1' 
    //     },
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setfeaturedListLoading(false);
    //         setfeaturedProducts(data.products)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         setfeaturedListLoading(false); 
    //     });
    // }, []);

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
        <div className="container mt-2">
            <div className="p-5">
                <h5 className="text-center">Our Featured Items</h5>
                <p className="text-center">Timeless pieces. Effortless style. Explore our featured collection crafted for those who wear confidence every day.</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="row">
                        {featuredProducts.map(featuredProduct => (
                            <div className="col-lg-3 col-md-3 col-6 mx-auto" key={featuredProduct.id}>
                                <div className="card shadow rounded-3">
                                    <img src={`https://${featuredProduct.imageUrl}`} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeaturedItem
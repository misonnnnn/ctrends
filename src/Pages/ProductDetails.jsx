import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import config from "../config";
import PageNotFound from "./PageNotFound";

function ProductDetails(){
    const location = useLocation();
    const path = location.pathname; 
    const cleanedPath = path.replace(/^\/?product-details\/?/, '');
    const api_url = `${config.API_URL}/asos/v1/products/details/${cleanedPath}`;
    console.log(api_url)

    const [isProductExisting, setIsProductExisting] = useState(false);

    useEffect(()=>{
        fetch(api_url,{
            method:'GET',
        }).then(res => res.json())
        .then(data =>{
            if(data.success){
                setIsProductExisting(true);
            }
            console.log(data)
        })
    }, [])

    if(isProductExisting){
         return (
            <>
                <span>{cleanedPath}</span>
            </>
        )
    }else{
        return <PageNotFound />
    }
    
}   


export default ProductDetails
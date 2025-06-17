import { useEffect, useState } from "react"
import API from "../utils/axios";

function Brands(){
    const [imageUrlPathList, setImageUrlPathList] = useState([]);

    useEffect(()=>{
        API.get(`/product-brands-images`)
        .then(res =>{
            if(res.data.success){
                setImageUrlPathList(res.data.data)
            }
        })
    }, [])

    
    return (
        <div className="text-center" > 
            <h5 className="">Brands</h5>
            {
                imageUrlPathList?.map((imageUrl, index) =>{
                    return (
                        <div className="d-inline-block" key={index} style={{width: '100px'}}>
                            <img src={`${imageUrl}`} alt="imageUrl" className="w-75 w-md-100" />
                        </div>
                    )
                })
            }
        </div>
    )
       
}

export default Brands
import { useEffect, useState } from "react"
import config from "../config"
import { iconName } from "@fortawesome/free-solid-svg-icons/fa0";


function Brands(){
    const [imageUrlPathList, setImageUrlPathList] = useState([]);

    useEffect(()=>{
        fetch(`${config.API_URL}/asos/v1/product-brands-images`,{
            method: 'GET'
        }).then(res => res.json())
        .then(data =>{
            if(data.success){
                setImageUrlPathList(data.data)
            }
        })

    }, [])

    
    return (
        <div className="text-center" > 
            <h5 className="">Brands</h5>
            {
                imageUrlPathList?.map((imageUrl, index) =>{
                    console.log(imageUrl)
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
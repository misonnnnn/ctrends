import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Template(){
    
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}


export default Template
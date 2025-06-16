import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Pages/Footer";

function Template(){
    
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}


export default Template
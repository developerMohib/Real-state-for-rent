import { Outlet } from "react-router-dom";
import Navbar from "../Elements/Navbar/Navbar";
import Footer from "../Elements/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-base-100" >
            <Navbar></Navbar>
            <div className="md:px-10" >                
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
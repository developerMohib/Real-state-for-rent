import { Outlet } from "react-router-dom";
import Navbar from "../Elements/Navbar/Navbar";
import Footer from "../Elements/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
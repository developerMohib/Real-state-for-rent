
import Estates from "../../Elements/Estates/Estates";
import Slider from "../../Elements/Slider/Slider";
import Testomonial from "../../Elements/Testomonial/Testomonial";
import Advantage from "../Advantage/Advantage";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Home = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <Estates> </Estates>
            </div>
            <div>
                <Advantage> </Advantage>
            </div>
            <div>
                <Testomonial> </Testomonial>
            </div>
        </div>
    );
};

export default Home;
import Estates from "../../Elements/Estates/Estates";
import Slider from "../../Elements/Slider/Slider";
import Testomonial from "../../Elements/Testomonial/Testomonial";
import Advantage from "../Advantage/Advantage";

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
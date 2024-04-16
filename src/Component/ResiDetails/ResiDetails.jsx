
import { useLoaderData, useParams } from "react-router-dom";

const ResiDetails = () => {
    const homeLoader = useLoaderData();
    const { id } = useParams();

    console.log(homeLoader, 'ase kina ')

    return (
        <div>
            <h1>Residential Details {id}</h1>
            {/* <h1>Residential Details length {resis.length}</h1> */}
            <p> tgsgsfgsg </p>
            {
                // resis.map((home, idx) => (
                //     <div key={idx}>
                //         <p>Check {home.id}</p>
                //         <img src={home.image} alt="" />
                //     </div>
                // ))
            }
        </div>
    );
};

export default ResiDetails;


import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setDataFromId } from '../../LocalStore/LocalStorage';
const JsonDataLoader = ( {data} ) => {
    const {image, estate_title, segment_name,description,facilities,price,status, id } = data;
    const setDataInlocal = () => {
      // setDataFromId(id)
      setDataFromId(data)
    }
    return (
        <div data-aos="fade-up" className="card bg-base-100 shadow-xl tests">
              <div className="indicator" >
          <span className="indicator-item badge badge-secondary translate-x-5 translate-y-px rotate-45 "> {segment_name} </span> 
              <figure>
                <img src={image} alt="Property" />
              </figure>
              </div>
              <div className="card-body">
              <p>Status: {status} </p>
                <h2 className="card-title">
                  {estate_title}
                </h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions items-center">
                    <span className='text-xl font-bold inline' >Facilities : </span>
                {facilities.map((facility) => (
                    <div key={facility} className="badge badge-outline">
                      <p>{facility} </p>
                    </div>
                  ))}
                </div>
                <div>
                  <Link to={`/details/${id}`} > <button onClick={setDataInlocal} className='btn btn-secondary text-black' >View Property</button> </Link>
                </div>
              </div>
            </div>
    );
};
JsonDataLoader.propTypes = {
    data: PropTypes.node,
}
export default JsonDataLoader;
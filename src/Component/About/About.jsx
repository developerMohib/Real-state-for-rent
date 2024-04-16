import { GiHomeGarage } from "react-icons/gi";
const About = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <p>
          <GiHomeGarage className="text-8xl ml-7" />
        </p>
        <div className="card-body">
          <h2 className="card-title">
            Sell your home
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>We do a free evaluation to be sure you want to start selling.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { GiHomeGarage } from "react-icons/gi";
const About = () => {
  return (
    <div>
      <div data-aos="zoom-in" className="w-2/3 mx-auto text-center my-10">
        <h1 className="text-3xl font-bold">Find Your Dream Home</h1>
        <p>
          These are the latest properties in the Sales category. You can create
          the list using the “latest listing shortcode” and show items by
          specific categories.
        </p>
      </div>
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

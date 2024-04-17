import moment from "moment";
import { useLoaderData, useParams } from "react-router-dom";

const ResiDetails = () => {
  const homeLoader = useLoaderData();
  const { id } = useParams();
  const targetHome = homeLoader?.find((home) => home.id == id);
//   console.log(targetHome, "ase kina ");

  const {
    estate_title,
    description,
    price,
    status,
    area,
    location,
    image,
    facilities,
  } = targetHome;

  return (
    <div>
        <div className="w-2/3 mx-auto text-center my-10">
        <h1 className="text-3xl font-bold">Find Your Dream Home</h1>
        <p>
        {estate_title}
        </p>
      </div>

      <div className="relative flex flex-col p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x bg-gray-50 text-gray-800 divide-gray-300 items-start ">
        <div className="p-3 space-y-1">
          <img src={image} alt="" />
          <h3 className="text-3xl font-semibold">{estate_title}</h3>
          <p className="text-sm text-gray-600"> {description} </p>
          <p className="text-sm text-gray-600"> <span className="font-bold text-xl" >Cost:</span> {price} </p>
          <p className="text-sm text-gray-600"> <span className="font-bold text-xl" > Status: </span> {status} </p>
          <p className="text-sm text-gray-600"> <span className="font-bold text-xl" > Location: </span>  {location} </p>
          <p className="font-semibold rounded-md" > Facilities </p>
          {
            facilities.map((opp , idx) => 
            (<li key={idx} > {opp} </li> ))
          }
        </div>
        <div className="flex items-center gap-3 p-3">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 bg-gray-500 rounded-full shadow"
          />
          <div className="space-y-1">
            <span className="text-xs"> { moment().format("dddd, MMMM Do YYYY, h:mm:ss a" )} </span>
            <div className="flex flex-wrap gap-3">
              <p className="text-sm  px-2 py-1 font-semibold rounded-md bg-indigo-600 text-gray-50">
                {" "}
                {price} {" "}
              </p>

              <p className="text-sm  px-2 py-1 font-semibold rounded-md bg-indigo-600 text-gray-50">
                {" "}
                {status}{" "}
              </p>
              <p className="text-sm  px-2 py-1 font-semibold rounded-md bg-indigo-600 text-gray-50">
                {" "}
                {area}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default ResiDetails;

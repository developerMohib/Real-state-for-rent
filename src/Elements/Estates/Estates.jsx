import { useEffect, useState } from "react";

const Estates = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try{
        const response = await fetch(`/public/Residantial.json`);
        const jsonData = await response.json();
        setData(jsonData);
      }
      catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    console.log(data , ' data from json')
    fetchData();
  }, []);


  return (
    <div>
      <div className="w-2/3 mx-auto text-center">
        <h1 className="text-3xl font-bold">Find Your Dream Home</h1>
        <p>
          These are the latest properties in the Sales category. You can create
          the list using the “latest listing shortcode” and show items by
          specific categories.
        </p>
      </div>

    {/* Card From Json */}

    {loading && <div>Loading...</div>}
    {!loading && (
      <div className="md:flex flex-wrap gap-6" > 
        {data.map(item => (
        <div key={item.id} className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {item.estate_title} 
          <div className="badge badge-secondary"> {item.segment_name} </div>
        </h2>
        <p> {item.description} </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  ))}
    </div>
    )}

    {/* Card From Json */}
    </div>
  );
};

export default Estates;

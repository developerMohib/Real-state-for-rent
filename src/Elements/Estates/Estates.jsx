import { useEffect, useState } from "react";
import JsonDataLoader from "../JsonDataLoader/JsonDataLoader";

const Estates = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(5)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/Residantial.json`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    // console.log(data, " data from json");
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-2/3 mx-auto text-center my-10">
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
        <div className="test md:grid grid-cols-3 gap-6 my-10 ">
          {data.slice(0, dataLen).map((item) => (
            <JsonDataLoader key={item.id} data={item}>
              {" "}
            </JsonDataLoader>
          ))}
        </div>
      )}
      {/* Card From Json */}
      <div className={`text-center my-4 ${dataLen === data.length && 'hidden' } `}>
        <button onClick={ () => setDataLen(data.length) } className="btn btn-outline">Load More</button>
      </div>
    </div>
  );
};

export default Estates;

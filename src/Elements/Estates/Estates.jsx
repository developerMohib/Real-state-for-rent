const Estates = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto text-center">
        <h1 className="text-3xl font-bold">Latest Properties</h1>
        <p>
          These are the latest properties in the Sales category. You can create
          the list using the “latest listing shortcode” and show items by
          specific categories.
        </p>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estates;

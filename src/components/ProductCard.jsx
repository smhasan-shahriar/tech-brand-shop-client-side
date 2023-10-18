import React from "react";

const ProductCard = ({ product }) => {
    const {name, image, brand, price, rating, description, type} = product
  return (
    <div className="w-full">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52 object-cover h-72"
            src={product.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Brand: {brand}</p>
          <p>Type: {type}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

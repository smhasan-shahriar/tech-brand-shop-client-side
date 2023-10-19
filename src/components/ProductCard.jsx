import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    const {_id, name, image, brand, price, rating, description, type} = product
  return (
    <div className="w-full">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="lg:w-52 object-cover h-72"
            src={product.image}
            alt="Album"
          />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="space-y-2">
          <p>Brand: <span className="font-semibold">{brand}</span> </p>
          <p>Type:  <span className="font-semibold capitalize">{type}</span> </p>
          <p className="flex gap-2 items-center">Rating:<span className="font-semibold -ml-1 -mr-[6px]">{rating}</span>/5 </p>
          <p className="">Price:  <span className="font-bold">${price}</span> </p>
          </div>
          <div className="card-actions justify-end">
         
            <Link to={`/products/${_id}`} className="btn btn-primary capitalize text-lg">Details</Link>
            <Link to={`/updateproducts/${_id}`} className="btn bg-orange-400 text-white capitalize text-lg">Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

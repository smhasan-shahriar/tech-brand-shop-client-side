import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authentication/MainAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  window.scrollTo({ top: 0 });
  const product = useLoaderData();
  const { _id, name, image, brand, price, rating, description, type } = product;
  const handleAddToCart = () => {
    const email = user?.email;
    const productId = _id;
    const userProduct = { email, productId };
    fetch("https://brandshop-server-indol.vercel.app/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Product has been successfully added to your cart");
        }
      });
  };
  return (
    <div className="max-w-[1920px] mx-auto mt-20">
      <div className="relative">
        <img className="h-[70vh] object-cover w-full" src={image} alt="" />
        <div className="text-5xl bg-black text-white py-5 px-10 absolute bottom-0 w-full bg-opacity-60 text-center">
          <p className="">{name}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center items-center my-10">
          <p className="text-xl font-medium lg:w-1/2 px-5">{description}</p>
        </div>
        <div className="w-1/2 mx-auto flex flex-col justify-center items-center relative lg:right-60">
          <p className="font-bold text-xl">Price: ${price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

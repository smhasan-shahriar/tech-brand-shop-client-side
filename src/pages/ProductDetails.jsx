import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../authentication/MainAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  window.scrollTo({ top: 0 });
  const [product, setProduct] = useState({});
  const { _id, name, image, brand, price, rating, description, type } = product;

  useEffect(() => {
    const fetchFunction = async () => {
      const response = await fetch(
        `https://brandshop-server-indol.vercel.app/products/${id}`
      );

      const data = await response.json();
      setProduct(data);
    };
    fetchFunction();
  }, []);
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
    <div className="pb-20">
      <div className="max-w-[1920px] mx-auto mt-16 md:mt-0 mb-20">
        <div className="relative">
          <img className="h-[70vh] object-cover w-full" src={image} alt="" />
          <div className="text-5xl bg-black text-white py-5 px-10 absolute bottom-0 w-full bg-opacity-60 text-center">
            <p className="">{name}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center lg:items-center my-10">
            <p className="text-xl font-medium lg:w-1/2 px-5 text-justify">{description}</p>
            <div className="flex flex-col gap-2 lg:w-1/2 relative left-5 py-5">
              <p className="text-xl font-medium">
                Brand Name: <span className="font-bold">{brand}</span>
              </p>
              <p className="text-xl font-medium">
                Product Type: <span className="font-bold">{type}</span>
              </p>
              <p className="text-xl font-medium">
                Product Rating: <span className="font-bold">{rating}</span>/5
              </p>
            </div>
            <div></div>
          </div>
          <div className="w-1/2 mx-auto flex flex-col gap-4 justify-center items-center relative lg:right-40">
            <p className="font-bold text-xl">Price: ${price}</p>
            <button className="btn btn-primary w-full lg:w-40 normal-case text-xl" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

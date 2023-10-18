import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "nuka-carousel";
import ProductCard from "../components/ProductCard";

const BrandPage = () => {
    window.scrollTo({top: 0})
  const { name } = useParams();
  const products = useLoaderData();
  const brand = name.toLowerCase();
  return (
    <div className="max-w-[1400px] mx-auto mb-20">
      {
        products.length > 0 ? <div>
<div>
        <Carousel wrapAround={true} className="">
          {products.slice(0,3).map((product) => (
            <div key={product._id} className="flex">
              <div
                className="hero h-[400px]"
                style={{
                  backgroundImage:
                    `url(${product.image})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content p-20">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Buy {product.name} at lowest price</h1>
                    <button className="btn btn-primary normal-case">Use Coupon: {product.brand}10</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <h2 className="text-4xl font-bold my-10 text-center">Products from {name}</h2>
      <div className="grid lg:grid-cols-2 gap-5 justify-items-center">
          {
            products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
          }
      </div>

        </div> : <div className="h-[95vh] flex justify-center items-center text-6xl font-bold text-center">
            Sorry, Products from this brand is currently unavailable
        </div>
      }  
      
    </div>
  );
};

export default BrandPage;

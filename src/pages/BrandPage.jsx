import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "nuka-carousel";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

const BrandPage = () => {
  window.scrollTo({ top: 0 });
  const [selectedBrand, setSelectedBrand] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSelectedBrand(data));
  }, []);
  const { name } = useParams();
  const particularBrand = selectedBrand.find((item) => item.name === name);
  const advertises = particularBrand?.advertise;
  const products = useLoaderData();
  const brand = name.toLowerCase();
  return (
    <div className="max-w-[1400px] mx-auto mb-20 mt-10">
      {products.length > 0 ? (
        <div>
          <div>
            <Carousel wrapAround={true}>
              {advertises?.map((advertise, index) => (
                <img
                  className="w-full h-[60vh] object-contain"
                  key={index}
                  src={advertise}
                />
              ))}
            </Carousel>
          </div>

          <h2 className="text-4xl font-bold my-10 text-center">
            Products from {name}
          </h2>
          <div className="grid lg:grid-cols-2 gap-5 justify-items-center">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Carousel wrapAround={true}>
              {advertises?.map((advertise, index) => (
                <img
                  className="w-full h-[60vh] object-contain"
                  key={index}
                  src={advertise}
                />
              ))}
            </Carousel>
          </div>
          <div className="py-20 flex justify-center items-center text-6xl font-bold text-center">
          Sorry, Products from this brand is currently unavailable
        </div>
        </div>

      
      )}
    </div>
  );
};

export default BrandPage;

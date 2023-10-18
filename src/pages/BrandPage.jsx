import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "nuka-carousel";

const BrandPage = () => {
  const { name } = useParams();
  const products = useLoaderData();
  const brand = name.toLowerCase();
  return (
    <div className="max-w-[1400px] mx-auto">
      <div>
        <Carousel wrapAround={true} className="">
          {products.map((product) => (
            <div key={product._id} className="flex">
              <div
                className="hero"
                style={{
                  backgroundImage:
                    `url(${product.image})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      hello {products.length}
    </div>
  );
};

export default BrandPage;

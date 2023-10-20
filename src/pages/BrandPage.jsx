import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "nuka-carousel";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../authentication/MainAuth";

const BrandPage = () => {
  const{loading, setLoading} = useContext(AuthContext)
  window.scrollTo({ top: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const [products, setProducts] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSelectedBrand(data));
  }, []);
  const { name } = useParams();
  const particularBrand = selectedBrand.find((item) => item.name === name);
  const advertises = particularBrand?.advertise;

  useEffect(() => {
    const fetchFunction = async () => {
      setLoading(true);
      const response = await fetch(
        `https://brandshop-server-indol.vercel.app/brands/${name}`
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchFunction();
  }, []);
  return (
    <div className="pb-20">
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
            <div className="grid lg:grid-cols-2 gap-5 justify-items-center mx-5">
              {products?.map((product) => (
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
            {
              loading && <div>
                <div className="w-full h-[80vh] flex justify-center items-center">
              <span className="loading loading-spinner loading-xs"></span>
              <span className="loading loading-spinner loading-sm"></span>
              <span className="loading loading-spinner loading-md"></span>
              <span className="loading loading-spinner loading-lg"></span>
            </div>
              </div>
            }
            {!loading && show && (
              <div className="py-20 flex justify-center items-center text-6xl font-bold text-center">
                Sorry, Products from this brand is currently unavailable
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;

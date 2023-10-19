import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1920px] mx-auto mt-16 md:mt-0">
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/q7v9b0R/ales-nesetril-Im7l-Zjxe-Lhg-unsplash-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Innovate. Upgrade. Elevate.</h1>
            <p className="mb-5">
            Elevate Your Digital Lifestyle with the Latest Gadgets and Gear. Explore, Innovate, Upgrade – Your Tech Journey Starts Here.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

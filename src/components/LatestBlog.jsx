import React from "react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const LatestBlog = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <h2 className="text-4xl font-bold my-10 text-center">Latest Blogs</h2>
      <AwesomeSlider className="h-[1000px] lg:h-auto">
        <div className="bg-white flex flex-col lg:flex-row items-center">
          <img
            className="w-1/2"
            src="https://i.ibb.co/QMzpYJv/neil-soni-6wd-Ru-K7b-VTE-unsplash.jpg"
            alt=""
          />
          <div className="ml-5 lg:w-1/2 flex flex-col justify-between mx-10 lg:mx-20 gap-5">
            <h2 className="text-4xl font-bold text-center">iPhone 11</h2>
            <p className="text-justify font-medium">
              The iPhone 11, released in 2019, remains a formidable contender in
              the smartphone market. Its 6.1-inch Liquid Retina display offers
              vibrant colors and sharp visuals. The A13 Bionic chip ensures
              swift performance, handling multitasking and demanding apps with
              ease. The dual-camera system excels in photography, producing
              sharp and detailed photos even in low light. Its Night mode is a
              standout feature. Battery life is commendable, providing all-day
              usage. The design is sleek and durable, featuring glass and
              aluminum. Face ID for security and iOS support for years to come
              make the iPhone 11 a compelling choice for those seeking a
              reliable and capable device.
            </p>
            <p className="text-right italic">Posted by: @hasan540</p>
          </div>
        </div>
        <div className="bg-white flex flex-col lg:flex-row items-center">
          <img
            className="w-1/2"
            src="https://i.ibb.co/TgK5Fnp/jaime-marrero-s3-G9-P8-OXz54-unsplash.jpg"
            alt=""
          />
          <div className="ml-5 lg:w-1/2 flex flex-col justify-between mx-10 lg:mx-20 gap-5">
            <h2 className="text-4xl font-bold text-center">Surface Pro 9</h2>
            <p className="text-justify font-medium">
              As of my last knowledge update in September 2021, the Surface Pro
              9 had not been released. However, I can provide a speculative
              overview of what one might expect from a device in the Surface Pro
              series. <br /> The Microsoft Surface Pro series is known for its
              versatility, blending the power of a laptop with the portability
              of a tablet. The Surface Pro 9 would likely continue this
              tradition with upgraded hardware, potentially featuring the latest
              Intel or AMD processors, ample RAM, and a high-resolution
              PixelSense display. It would likely support the Surface Pen and
              Type Cover for enhanced productivity. Microsoft's commitment to
              Windows updates and a sleek, premium design would make the Surface
              Pro 9 an enticing choice for professionals and creatives alike.
              Keep an eye out for official announcements for precise details and
              features.
            </p>
            <p className="text-right italic">Posted by: @ramim540</p>
          </div>
        </div>
        <div className="bg-white flex flex-col lg:flex-row items-center">
          <img
            className="w-1/2"
            src="https://i.ibb.co/30zT5N7/austin-poon-JO-S6ew-Bq-Ak-unsplash.jpg"
            alt=""
          />
          <div className="ml-5 lg:w-1/2 flex flex-col justify-between mx-10 lg:mx-20 gap-5">
            <h2 className="text-4xl font-bold text-center">Macbook Pro</h2>
            <p className="text-justify font-medium">
              The MacBook Pro, a flagship offering from Apple, exemplifies
              power, precision, and premium design. Its sleek aluminum chassis
              houses impressive technology, often featuring the latest Intel or
              Apple-designed M1 processors. The Retina display delivers stunning
              visuals with sharp colors and clarity, ideal for creative
              professionals. The MacBook Pro's backlit Magic Keyboard provides a
              comfortable typing experience. High-quality speakers and a
              responsive trackpad further elevate the user experience. With
              Thunderbolt ports, it offers seamless connectivity to various
              peripherals. Whether you're a creative guru, developer, or
              business executive, the MacBook Pro's performance, reliability,
              and the MacOS ecosystem make it a top choice for demanding tasks
              and everyday computing.
            </p>
            <p className="text-right italic">Posted by: @lucy80</p>
          </div>
        </div>
        <div className="bg-white flex flex-col lg:flex-row items-center">
          <img
            className="w-1/2 h-1/2"
            src="https://i.ibb.co/BNfdQVv/zana-latif-3g5-Qv-0-Hyko-unsplash.jpg"
            alt=""
          />
          <div className="ml-5 lg:w-1/2 flex flex-col justify-between mx-10 lg:mx-20 gap-5">
            <h2 className="text-4xl font-bold text-center">Galaxy S23</h2>
            <p className="text-justify font-medium">
              As of my last update in September 2021, the Samsung Galaxy S23 had
              not been released. However, I can provide some speculative
              insights into what one might expect from a device in the Galaxy S
              series. <br />
              Samsung's Galaxy S series has consistently set a high bar for
              smartphone innovation. The Galaxy S23 would likely feature
              cutting-edge technology, including a powerful processor, vibrant
              AMOLED display, and top-tier cameras. Enhanced 5G capabilities,
              battery life, and software optimizations would likely be part of
              the package. With a sleek design and a focus on premium materials,
              it would offer a premium look and feel. Samsung's commitment to
              innovation and user-centric features would ensure the Galaxy S23's
              position as a flagship device for Android enthusiasts. Keep an eye
              out for official announcements for precise details.
            </p>
            <p className="text-right italic">Posted by: @anna40</p>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default LatestBlog;

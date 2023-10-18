import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-[1400px] mx-auto shadow-lg p-10 my-20">
      <h2 className="text-4xl font-bold my-10 text-center">Contact Us</h2>
      <div className=" flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/5">
          <img
            className="rounded-lg md:max-h-[500px] max-h-[200px] object-cover w-full"
            src="https://i.ibb.co/sPCMLT9/kevindous-cz-CIv-Iu6-PHU-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-3/5 flex items-center">
          <form className="space-y-5 flex-1">
            <div className="form-control">
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 gap-5">
            <div className="form-control flex-1">
              <label className="input-group">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group">
                <span>Phone</span>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            </div>
            <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
           <input className="btn btn-outline bg-slate-500 w-full text-white" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

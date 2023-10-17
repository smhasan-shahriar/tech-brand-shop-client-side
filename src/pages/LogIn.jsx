import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

const LogIn = () => {
  return (
    <div className="min-h-[95vh] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-5xl font-bold mb-10 text-center">Login Now</h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white normal-case text-xl"
                  type="submit"
                  value="Login"
                />
              </div>
              <p>
                Already have account? Please{" "}
                <span className="btn btn-link p-0 normal-case">Register</span>
              </p>
              <div className="flex items-center">
                
                <p className="btn btn-ghost normal-case btn-outline text-blue-600"><AiOutlineGoogle/> Login with Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

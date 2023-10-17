import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import AuthHook from '../hooks/AuthHook';
import { AuthContext } from '../authentication/MainAuth';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const image = form.image.value;
        const email=form.email.value;
        const password=form.password.value;
        if(password.length < 6){
            toast('password cannot be less than 6 characters')
            return 
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })


    }
    return (
        <div className="min-h-[92vh] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-5xl font-bold mb-10 text-center">Register Now</h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
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
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white normal-case text-xl"
                  type="submit"
                  value="Register"
                />
              </div>
              <p>
                Already have account? Please{" "}
                <Link to="/login"><span className="btn btn-link p-0 normal-case">Login</span></Link>
              </p>
              <div className="flex items-center">
                
                <p className="btn btn-ghost normal-case btn-outline text-blue-600"><AiOutlineGoogle/> Register with Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;
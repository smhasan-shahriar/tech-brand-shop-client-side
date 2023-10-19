import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProduct = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const fetchFunction = async () => {
    const response = await fetch(`https://brandshop-server-indol.vercel.app/products/${id}`)
    if (response.status === 200){
      const data = await response.json();
      setProduct(data)
      return;
    }
    setTimeout(fetchFunction, 500)
  }
  useEffect(()=>{
    fetchFunction();
  },[])
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const updatedProduct = { name, image, brand, price, rating, type };
    fetch(
      `https://brandshop-server-indol.vercel.app/updateproducts/${product._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Product successfully updated");
        }
      });
  };
  return (
    <div className="max-w-[1400px] mx-auto bg-base-200 rounded-lg shadow-xl p-10 my-20">
      <h2 className="text-4xl font-bold my-10 text-center">Update Product</h2>
      <form onSubmit={handleUpdateProduct} className="w-2/3 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              placeholder="Brand Name"
              name="brand"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              step=".01"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <select name="type" className="input input-bordered">
              <option value="computer">Computer</option>
              <option value="phone">Phone</option>
              <option value="headphone">Headphone</option>
              <option value="smartwatch">Smart Watch</option>
              <option value="tablet">Tablet</option>
              <option value="console">Gaming Console</option>
            </select>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            step=".01"
            placeholder="Rating (Out of 5)"
            name="rating"
            className="input input-bordered"
            min="0"
            max="5"
            required
          />
        </div>
        <input
          className="btn btn-outline w-full my-10 normal-case text-xl font-bold"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;

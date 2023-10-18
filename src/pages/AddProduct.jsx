import React from "react";

const AddProduct = () => {
  const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type= form.type.value; 
    console.log(name, type)
  }
  return (
    <div className="max-w-[1400px] mx-auto bg-base-200 rounded-lg shadow-xl p-10 my-20">
      <h2 className="text-4xl font-bold my-10 text-center">Add a Product</h2>
      <form onSubmit={handleAddProduct}  className="w-2/3 mx-auto">
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
        <div className="flex gap-5"> 
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
            <span className="label-text">Product Category</span>
          </label>
          <select name="type" className="input input-bordered">
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
            <option value="headphone">Headphone</option>
            <option value="smartwatch">Smart Watch</option>
            <option value="tablet">Tablet</option>
          </select>
        </div>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea placeholder="Short Description" name="description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            placeholder="name"
            name="rating"
            className="input input-bordered"
            required
          />
        </div>
        <input className="btn btn-outline w-full my-10 normal-case text-xl font-bold" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;

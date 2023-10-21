import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const type = form.type.value;
    const newProduct = { name, image, brand, price, rating, description, type };
    fetch("https://brandshop-server-indol.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Product has been successfully added to the database");
          form.reset();
        }
      });
  };
  return (
    <div className="pb-20">
      <div className="max-w-[1400px] mx-auto bg-base-200 rounded-lg shadow-xl p-10 my-20">
        <h2 className="text-4xl font-bold my-10 text-center">Add a Product</h2>
        <form onSubmit={handleAddProduct} className="w-2/3 mx-auto">
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
              <select name="brand" className="input input-bordered">
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Google">Google</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Sony">Sony</option>
              </select>
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
                <option value="Computer">Computer</option>
                <option value="Phone">Phone</option>
                <option value="Headphone">Headphone</option>
                <option value="Smartwatch">Smart Watch</option>
                <option value="Tablet">Tablet</option>
                <option value="Gaming Console">Gaming Console</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              placeholder="Short Description"
              name="description"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
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
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

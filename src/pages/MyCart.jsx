import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../authentication/MainAuth";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    const fetchCartFunction = async () => {
      const response = await fetch(
        "https://brandshop-server-indol.vercel.app/mycart"
      );
  
      const data = await response.json();
      setCart(data);
    };
    fetchCartFunction();
  }, []);


  useEffect(() => {
    const fetchProductsFunction = async () => {
      const response = await fetch(
        "https://brandshop-server-indol.vercel.app/products"
      );
  
        const data = await response.json();
        setProducts(data);
      }
    fetchProductsFunction();
  }, []);

  useEffect(() => {
    const userProducts = cart.filter((product) => product.email === user.email);
    const productsArray = userProducts.map((product) => product.productId);
    const displayArray = [];
    for (let item of productsArray) {
      for (let product of products) {
        if (product._id == item) {
          displayArray.push(product);
        }
      }
    }

    setDisplayProducts(displayArray);
  }, [user, cart, products]);

  const email = user.email;
  const myRef = { email };
  const handleDelete = (id) => {
    fetch(`https://brandshop-server-indol.vercel.app/mycart/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myRef),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast("Product has been successfully deleted from your cart");
          let found = false;
          const updatedProducts = displayProducts.filter((product) => {
            if (product._id === id && !found) {
              found = true;
              return false;
            }

            return true;
          });
          setDisplayProducts(updatedProducts);
        }
      });
  };
  return (
    <div className="pb-20">
      <div className="max-w-[1000px] min-h-[75vh] mx-auto rounded-lg shadow-xl px-10 py-10 mb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold my-10 text-left">My Cart</h2>
          <p className="font-medium">Total Items: {displayProducts?.length}</p>
        </div>
        <div>
          {displayProducts?.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row my-5 items-center gap-10"
            >
              <div className="md:w-1/3">
                <img
                  className="w-[360px] md:w-72 h-52 object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <h3 className="text-xl text-center md:text-left">
                  {product.brand}
                </h3>
              </div>
              <div>
                <h3 className="text-xl md:min-w-[120px]">Price: <span className="font-bold">${product.price}</span></h3>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;

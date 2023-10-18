import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authentication/MainAuth';

const MyCart = () => {
    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const cartProducts = useLoaderData();
    const [cart, setCart] = useState(cartProducts)
    const userProducts = cart.filter(product => product.email == user.email)
    
    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const productsArray = []
    userProducts.map(product => productsArray.push(product.productId));
    const cartProductsFull = products.filter(product => productsArray.includes(product._id))
    const email = user.email
    const myRef = {email}
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/mycart/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myRef)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                toast('successfully deleted');
                const newCart = cartProducts.filter(product => product.id !== id)
                setCart(newCart)
            }
        })
    }
    return (
        <div className='max-w-[1000px] mx-auto rounded-lg shadow-xl px-10 py-10'>
            <div className='flex justify-between items-center'>
                <h2 className="text-4xl font-bold my-10 text-left">My Cart</h2>
                <p className='font-medium'>Total Items: {userProducts?.length}</p>
            </div>
            <div>
                {
                    cartProductsFull?.map(product => <div key={product._id} className='flex my-5 items-center'>
                        <div className='w-1/3'>
                            <img className='w-52 h-52 object-cover' src={product.image} alt="" />
                        </div>
                        <div className='w-1/3'>
                          
                            <h3 className='text-xl font-bold'>{product.name}</h3>
                            <h3 className='text-xl'>{product.brand}</h3>
                            

                        </div>
                        <div>
                        <h3 className='text-xl font-bold'>Price: ${product.price}</h3>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(product._id)} className='btn bg-red-500 text-white lg:ml-20'>Delete</button>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;
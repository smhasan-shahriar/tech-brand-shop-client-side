import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const {_id, name, image, brand, price, rating, description, type} = product
    return (
        <div className='max-w-[1920px] mx-auto '>
            <div className='relative'>
                <img className='h-[70vh] object-cover w-full' src={image} alt="" />
                <div className='text-5xl bg-black text-white py-5 px-10 absolute bottom-0 w-full bg-opacity-60 text-center'>
                    <p className=''>{name}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='flex justify-center items-center my-10'>
                    <p className='text-xl font-medium w-1/2'>{description}</p>
                </div>
                <div className='w-1/2 mx-auto flex flex-col justify-center items-center'>
                    <p className='font-bold text-xl'>Price: ${price}</p>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
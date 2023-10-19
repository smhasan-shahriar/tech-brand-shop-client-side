import { useEffect, useState } from 'react';
import BrandCard from './BrandCard';

const BrandContainer = () => {
    const [brands, setBrands] = useState([])

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className=' max-w-[1600px] mx-10 lg:mx-auto my-28'>
            <h2 className='text-4xl font-bold my-10 text-center'>Available Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)}
            </div>
        </div>
    );
};

export default BrandContainer;
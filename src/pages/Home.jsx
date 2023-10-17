import React from 'react';
import AuthHook from '../hooks/AuthHook';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BrandContainer from '../components/BrandContainer';

const Home = () => {
    const {age} = AuthHook();
    console.log(age)
    return (
        <div className=''>
            <Banner></Banner>
            <BrandContainer></BrandContainer>
            <Footer></Footer>
        </div>
    );
};

export default Home;
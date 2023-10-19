import React from 'react';
import AuthHook from '../hooks/AuthHook';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BrandContainer from '../components/BrandContainer';
import LatestBlog from '../components/LatestBlog';
import ContactUs from '../components/ContactUs';


const Home = () => {
  
    const {age} = AuthHook();
    console.log(age)
    return (
        <div className=''>
            <Banner></Banner>
            <BrandContainer></BrandContainer>
            <LatestBlog></LatestBlog>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
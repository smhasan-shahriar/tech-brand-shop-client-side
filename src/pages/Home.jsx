import Banner from '../components/Banner';
import BrandContainer from '../components/BrandContainer';
import LatestBlog from '../components/LatestBlog';
import ContactUs from '../components/ContactUs';


const Home = () => {

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
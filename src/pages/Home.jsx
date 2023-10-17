import React from 'react';
import AuthHook from '../hooks/AuthHook';

const Home = () => {
    const {age} = AuthHook();
    console.log(age)
    return (
        <div>
            home
        </div>
    );
};

export default Home;
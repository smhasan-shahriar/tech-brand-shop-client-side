import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';


const MainLayout = () => {
  
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;
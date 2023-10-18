import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import AddProduct from '../pages/AddProduct';

const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path:"/addproduct",
          element: <AddProduct></AddProduct>
        }
      ],
    },
  ]);

export default MainRouter;
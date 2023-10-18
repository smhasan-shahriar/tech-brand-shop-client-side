import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import AddProduct from '../pages/AddProduct';
import BrandPage from '../pages/BrandPage';
import ProductDetails from '../pages/ProductDetails';
import UpdateProduct from '../pages/UpdateProduct';
import PrivateRoutes from './PrivateRoutes';
import MyCart from '../pages/MyCart';

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
          element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes> 
        },
        {
          path:"/mycart",
          element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes> ,
          loader: async () => {
            const cartLoader = await fetch('http://localhost:5000/mycart');
            const productLoader= await fetch('http://localhost:5000/products');
        
            return {
              cart: await cartLoader.json(),
              products: await productLoader.json(),
            };
          },
        },
        {
          path: "/brands/:name",
          element: <BrandPage></BrandPage>,
          loader: ({params}) => fetch(`http://localhost:5000/brands/${params.name}`)
        },
        {
          path: "/products/:id",
          element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: "/updateproducts/:id",
          element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes> ,
          loader: ({params}) => fetch(`http://localhost:5000/updateproducts/${params.id}`)
        }
      ],
    },
  ]);

export default MainRouter;
import React, { useContext } from 'react';
import { AuthContext } from '../authentication/MainAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <div className="w-full h-[80vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        );
      }
      if (user){
        return <div>{children}</div>
        
      }
      else{
        return <Navigate state={location.pathname} to="/login" replace></Navigate>
      }
};

export default PrivateRoutes;
import React, { useContext } from 'react';
import { AuthContext } from '../authentication/MainAuth';

const AuthHook = () => {
    const AuthContextHook = useContext(AuthContext)
    return AuthContextHook; 
};

export default AuthHook;
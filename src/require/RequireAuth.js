import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const [user, loading] = useState('');
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';
import { logOut } from '../redux/Slice/authSlice';
import { useDispatch } from 'react-redux';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    // const [user, loading] = useState(auth); const user = useSelector((state) => state?.user?.id);
    const [user, loading] = useState('');
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        dispatch(logOut());
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAdmin;
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../services/users.service';

const ProtectedRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const isLoggedIn = isAuthenticated();
            console.log(isLoggedIn)
            setIsLoggedIn(isLoggedIn);
            setIsLoading(false);
        }
        checkAuth();
    }, [])

    if (isLoading) {
        return <div>Loading</div>
    }
    else {
        return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    }

}

export default ProtectedRoute
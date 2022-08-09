import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


export const PublicGuard = () => {
    const { userData } = useContext(UserContext);

    if(userData) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}
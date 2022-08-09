import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


export const PrivateGuard = () => {
    const { userData } = useContext(UserContext);

    if(!userData) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

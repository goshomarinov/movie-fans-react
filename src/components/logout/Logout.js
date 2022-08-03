import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import * as userApi from '../../services/userService';

export const Logout = () => {
    const navigate = useNavigate();
    const { userLogout } = useContext(UserContext);

   
    useEffect(() => {
        userApi.logout()
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}
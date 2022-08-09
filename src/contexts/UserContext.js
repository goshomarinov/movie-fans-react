import { createContext } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { clearUserData } from '../utils/localStorage';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useLocalStorage({});

    const userLogin = (userData) => {
        setUserData(userData);
    };

    const userLogout = () => {
        setUserData(clearUserData)
    };

    return (
        <UserContext.Provider value={{userData, userLogin, userLogout}}>
            {children}
        </UserContext.Provider>
    );
};
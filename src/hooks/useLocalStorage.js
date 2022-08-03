import { useState } from 'react';
import { getUserData, setUserData } from '../utils/localStorage';

export const useLocalStorage = (userData) => {
    const [value, setValue] = useState(() => {
        const storedData = getUserData();

        return storedData;
    });

    const setLocalStorageValue = (userData) => {
        setUserData(userData);

        setValue(userData);
    };

    return [
        value,
        setLocalStorageValue,
    ];
}

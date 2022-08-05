import { useState } from 'react';


export const useMovieStorage = () => {
    const [value, setMovies] = useState([]);
    return [value, setMovies];
}
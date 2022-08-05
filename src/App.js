import { Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { MovieContext } from './contexts/MovieContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import * as api from './services/movieService';

import './App.css'

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';
import { Search } from './components/search/Search';
import { Footer } from './components/footer/Footer';
import { clearUserData } from './utils/localStorage';
import { NotFound } from './components/not-found/NotFound';
import { Create } from './components/create/Create';
import { useMovieStorage } from './hooks/useMoviesStorage';
import { useEffect } from 'react';


function App() {
    const [userData, setUserData] = useLocalStorage({});
    const [movies, setMovies] = useMovieStorage();
    
    const userLogin = (userData) => {
        setUserData(userData);
    };
    
    const userLogout = () => {
        setUserData(clearUserData)
    };
    
    useEffect(() => {
        try {
            api.getAllmovies()
            .then(result => {
                setMovies(result);
            })
        } catch (err) {
            alert(err.message);
        }
    }, [movies])

    return (
        <UserContext.Provider value={{ userData, userLogin, userLogout }}>
            <div className="App">

                <Header />

                <main>

                    <MovieContext.Provider value={movies}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/search' element={<Search />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </MovieContext.Provider>

                </main>

                <Footer />

            </div>
        </UserContext.Provider>
    );
}

export default App;

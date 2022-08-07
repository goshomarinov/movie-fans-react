import { Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { MovieContext } from './contexts/MovieContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useEffect, useState } from 'react';
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
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';
import { Delete } from './components/delete/Delete';
import { AddComment } from './components/comments/addComment/AddComment';
import { EditComment } from './components/comments/editComment/EditComment';
import { DeleteComment } from './components/comments/deleteComment/DeleteComment';


function App() {
    const [movies, setMovies] = useState([]);
    const [userData, setUserData] = useLocalStorage({});

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
                    setMovies(result)
                })
        } catch (err) {
            alert(err.message);
        }
    }, [])

    return (
        <UserContext.Provider value={{ userData, userLogin, userLogout }}>
            <div className="App">

                <Header />

                <main>

                    <MovieContext.Provider value={movies}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:id' element={<Details />} />
                            <Route path='/details/edit/:id' element={<Edit />} />
                            <Route path='/details/delete/:id' element={<Delete />} />
                            <Route path='/details/comment/:id' element={<AddComment />}/>
                            <Route path='/details/comment/edit/:id' element={<EditComment />}/>
                            <Route path='/details/comment/delete/:id' element={<DeleteComment />}/>
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

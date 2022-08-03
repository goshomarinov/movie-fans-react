import { Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';

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


function App() {
    const [userData, setUserData] = useLocalStorage({});

    const userLogin = (userData) => {
        setUserData(userData);
    };

    const userLogout = () => {
        setUserData(clearUserData)
    };

    return (
        <UserContext.Provider value={{ userData, userLogin, userLogout }}>
        <div className="App">

            <Header />

            <main>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>

            </main>

            <Footer />

        </div>
        </UserContext.Provider>
    );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import './App.css'

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';
import { Search } from './components/search/Search';
import { Footer } from './components/footer/Footer';
import { NotFound } from './components/not-found/NotFound';
import { Create } from './components/create/Create';
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';
import { Delete } from './components/delete/Delete';
import { AddComment } from './components/comments/addComment/AddComment';
import { EditComment } from './components/comments/editComment/EditComment';
import { DeleteComment } from './components/comments/deleteComment/DeleteComment';
import { PrivateGuard } from './components/routesGuards/PrivateGuard';
import { PublicGuard } from './components/routesGuards/PublicGuard';


function App() {

    return (
        <UserProvider>
            <div className="App">

                <Header />

                <main>
                    <Routes>
                        <Route element={<PrivateGuard />}>
                            <Route path='/catalog/details/edit/:id' element={<Edit />} />
                            <Route path='/catalog/details/delete/:id' element={<Delete />} />
                            <Route path='/catalog/details/comment/edit/:id' element={<EditComment />} />
                            <Route path='/catalog/details/comment/delete/:id' element={<DeleteComment />} />
                            <Route path='/catalog/details/comment/:id' element={<AddComment />} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route element={<PublicGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/catalog/:id' element={<Details />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />

            </div>
        </UserProvider>
    );
}

export default App;

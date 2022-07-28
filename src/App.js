import { Routes, Route } from 'react-router-dom';

import './App.css'

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Search } from './components/search/Search';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;

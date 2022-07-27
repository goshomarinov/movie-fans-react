import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Catalog } from './components/catalog/Catalog';
import { Footer } from './components/footer/Footer';


import './App.css'


function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;

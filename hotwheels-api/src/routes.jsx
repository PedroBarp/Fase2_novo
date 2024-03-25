import React from 'react';
import AddCarro from './pages/addCarro';
import Sobre from './pages/sobre';
import Home from './pages/home';
import Carros from './pages/carros';
import EditCar from './pages/ediCar';
import RotaPadrao from './pages/padrao';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/carros' element={<Carros></Carros>} />
        <Route path='/sobre' element={<Sobre></Sobre>} />
        <Route path='/addCarro' element={<AddCarro></AddCarro>} />
        <Route path='/editar/:id' element={<EditCar></EditCar>} />
        <Route path='*' element={<RotaPadrao></RotaPadrao>} />
      </Routes>
    </Router>
  );
}

export default App;

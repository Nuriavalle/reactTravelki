import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../page/Home"
import Header from '../components/header';
import RegistroHotel from '../components/RegistroHotel';
import RegistroUsuario from '../components/RegistroUsuario';
import InicioSesion from '../components/InicioSesion';
import Carrusel from '../components/carrusel';
import Footer from '../components/footer';
import Header2 from '../components/header2';
import VistaHoliday from '../page/vistaHoliday';

function AppRouter(){
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/RegistroHotel" element={<RegistroHotel/>}/>
            <Route path="/RegistroUsuario" element={<RegistroUsuario/>}/>
            <Route path="/InicioSesion" element={<InicioSesion/>}/>
            <Route path="/Carrusel" element={<Carrusel/>}/>
            <Route path="/Footer" element= {<Footer/>}/>
            </Routes>
            </BrowserRouter>
    )
}

export default AppRouter;
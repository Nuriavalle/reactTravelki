import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../page/Home"
import Header from '../components/header';
import RegistroHotel from '../components/RegistroHotel';
import RegistroUsuario from '../components/RegistroUsuario';
import InicioSesion from '../components/InicioSesion';
import Cuadros from '../components/cuadros';
import Carrusel from '../components/carrusel';
import Footer from '../components/footer';
import Header2 from '../components/header2';
import VistaHoliday from '../page/vistaHoliday';

function AppRouter() {
    return (
        <BrowserRouter>
            <Header2></Header2>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RegistroHotel" element={<RegistroHotel />} />
                <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                <Route path="/InicioSesion" element={<InicioSesion />} />
                <Route path="/VistaHoliday" element={<VistaHoliday />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default AppRouter;
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../page/Home"
import Header from '../components/header';
import RegistroHotel from '../components/RegistroHotel';
import RegistroUsuario from '../components/RegistroUsuario';
import InicioSesion from '../components/InicioSesion';

function AppRouter(){
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/RegistroHotel" element={<RegistroHotel/>}/>
            <Route path="/RegistroUsuario" element={<RegistroUsuario/>}/>
            <Route path="/InicioSesion" element={<InicioSesion/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
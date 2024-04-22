import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrodeUsuario from '../page/RegistrodeUsuario';
import IniciodeSesion from '../page/IniciodeSesion';
import Footer from '../components/footer';
import VistaHoliday from '../page/vistaHoliday';
import Landing from '../page/Landing1';
import RegistrodeHotel from '../page/RegistrodeHotel';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/RegistrodeHotel" element={<RegistrodeHotel/>}/>
                <Route path="/RegistrodeUsuario" element={<RegistrodeUsuario />} />
                <Route path="/IniciodeSesion" element={<IniciodeSesion />} />
                <Route path="/VistaHoliday" element={<VistaHoliday />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default AppRouter;
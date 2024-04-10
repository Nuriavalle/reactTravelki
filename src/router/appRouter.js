import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../page/Home"
import Header from '../components/header';
import RegistroHotel from '../components/RegistroHotel';

function AppRouter(){
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/RegistroHotel" element={<RegistroHotel/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
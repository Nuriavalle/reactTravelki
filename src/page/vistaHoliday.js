import React from 'react'
import Header2 from '../components/header2';
import Cuadros from '../components/cuadros';
import Carrusel from '../components/carrusel';
import Tabs from '../components/Tabs';
import infoHotel from '../components/infohotel';

function VistaHoliday() {
    return (
        <div class="pt-4">
            <Header2></Header2>
          
            <Cuadros></Cuadros>
            <Carrusel></Carrusel>
          
        </div>
    )
}
export default VistaHoliday;
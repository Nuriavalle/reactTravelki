import React from 'react'
import Header2 from '../components/header2';
import Cuadros from '../components/cuadros';
import Carrusel from '../components/carrusel';
import Tabs from '../components/Tabs';
import infoHotel from '../components/infohotel';
import Opciones from '../components/opciones';

function VistaHoliday() {
    return (
        <div class="pt-4">
<Header2></Header2>
<infoHotel></infoHotel>
<Cuadros></Cuadros>
<Carrusel></Carrusel>
<Tabs></Tabs> 
<Opciones></Opciones>
        </div>
    )
}
export default VistaHoliday;
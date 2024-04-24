import Logo from '../assets/imagenes/header/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header class="fixed w-full bg-gray-50 bg-opacity-70 shadow-md z-10 h-[110px] bg-clip-padding blur-backdrop-filter">
            <div class="container mx-auto flex items-center justify-between h-full">
                <a href="#" class="flex items-center">
                    <img src={Logo} alt="Logo de la empresa" class="object-contain h-[135px] mr-6"></img>
                </a>
                <nav class="flex items-center ml-[330px]">
                    <a href='#Carrusel' class="mr-5 hover:text-[#0D3B66]">Inicio</a>
                    <a href='#Nosotros' class="mr-5 hover:text-[#0D3B66]">Nosotros</a>
                    <a href='#Servicios' class="mr-5 hover:text-[#0D3B66]">Servicios</a>
                </nav>
                <div className="flex items-center">
                    <Link to="/RegistrodeHotel" className="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mr-1">Registrar hotel</Link>
                    <Link to="/RegistrodeUsuario" className="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mr-1">Registrate</Link>
                    <Link to="/IniciodeSesion" className="inline-flex items-center bg-[#0D3B66] border-0 py-1 px-8 focus:outline-none hover:bg-[#1D588F] rounded-full text-white">Inicia sesión</Link>
                </div>
            </div>
        </header>
    )
}
export default Header;


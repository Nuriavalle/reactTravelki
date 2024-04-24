import logoBlanco from "../images/foto3.png"
import { Link } from 'react-router-dom';

function Header2() {
  return (
    <header class="bg-sky-800 text-white flex items-end">
      <img src={logoBlanco} alt="Imagen de ejemplo" width="250" />
      <div class="container mx-auto text-end mb-8 pb-3">
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
        <Link to="/" className="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mr-1">Inicio</Link>
        <Link to="/RegistrodeHotel" className="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mr-1">Registrar hotel</Link>
        <Link to="/RegistrodeUsuario" className="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mr-1">Registrate</Link>
        <Link to="/IniciodeSesion" className="inline-flex items-center bg-[#0D3B66] border-0 py-1 px-8 focus:outline-none hover:bg-[#1D588F] rounded-full text-white">Inicia sesión</Link>
      </div>
    </header>
  );
};
export default Header2;
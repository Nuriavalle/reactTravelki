import LogoFooter from "../assets/imagenes/footer/logoFooter.png"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="text-gray-600 body-font bg-[#0D3B66]">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left xl">
          <img src={LogoFooter} alt="logo"></img>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACTÁNOS</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-[#628FBA]">(+503) 2255-6578</a>
              </li>
              <li>
                <a class="text-[#628FBA]">
                  travelkiriaes@corp.com</a>
              </li>
              <li>
                <a class="text-[#628FBA]">Col. San benito, San Salvador, El Salvador</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORAR</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-[#628FBA] hover:text-[#AFD5F9]" href="#Inicio">Inicio</a>
              </li>
              <li>
                <a class="text-[#628FBA] hover:text-[#AFD5F9]" href="#Nosotros">Nosotros</a>
              </li>
              <li>
                <a class="text-[#628FBA] hover:text-[#AFD5F9]" href="#Servicios">Servicios</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">POLÍTICAS</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-[#628FBA] hover:text-[#AFD5F9]">Terminos y condiciones</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-[#0A3054]">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Travelkiria —
            <a href="#" class="text-gray-600 ml-1">Todos los derechos reservados</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
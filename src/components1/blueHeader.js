import LogoNegativo from '../assets/imagenes/header/Logo negativo.png'

function BlueHeader() {
    return (
        <header class="fixed w-full bg-[#0D3B66] shadow-md z-10 h-[110px] bg-clip-padding blur-backdrop-filter">
            <div class="container mx-auto flex items-center justify-between h-full">
                <a href="#Inicio" class="flex items-center">
                    <img src={LogoNegativo} alt="Logo de la empresa" class="object-contain h-[135px] mr-6"></img>

                </a>
                <p class="mr-[400px]">"Tu hogar lejos de casa, reserva en un clic”.</p>
            </div>
        </header>
    )
}
export default BlueHeader;


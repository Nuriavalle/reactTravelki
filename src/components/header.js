import logoMenu from "../images/foto3.png"
function Header() {
    return (
        <header class="bg-sky-800 text-white flex items-end">
            <img src={logoMenu} alt="Imagen de ejemplo" width="250" height="250" class="ml-12"></img>
            <div class="container mx-auto text-end mb-8 pr-20 pb-3">
                <h1 class="text-2xl font-sans">"Tu hogar lejos de casa, reserva en un clic”.</h1>
            </div>
        </header>
    );
};
export default Header;
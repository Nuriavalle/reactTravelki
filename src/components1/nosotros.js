import "animate.css"
import Imagen from "../assets/imagenes/nosotros/nosotros.jpg"

function Nosotros() {
    return (
        <section class="relative" id="Nosotros">
            <div class="absolute inset-0">
                <img src={Imagen} alt="#" class="object-cover w-full h-[700px]"></img>
            </div>
            <div class="mx-full max-w-full py-[350px] sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 absolute inset-0 nosotrosNuevaClase">
                <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <div class="container border-2 border-[#F4D353] drop-shadow-lg p-4 rounded-lg bg-[#F4D353] animate__animated animate__fadeInDown">
                        <h1 class="text-3xl font-bold sm:text-5xl text-[#0D3B66] text-center italic">
                            Sobre Nosotros
                        </h1>
                    </div>
                    <p class="mt-4 max-w-lg sm:text-xl sm:leading-7 text-white text-center">
                        Somos una plataforma líder en la reservación de habitaciones, que ofrece una experiencia
                        incomparable de alojamiento en todo el país. Nos enorgullece conectar a nuestros clientes
                        con una amplia gama de hoteles en donde pueden encontrar su destino perfecto
                        que se adapte a sus necesidades y preferencias.
                    </p>
                    <hr></hr>
                </div>
            </div>
        </section>
    )
}
export default Nosotros;
import HaIndividual from "../images/individual.jpg"
import doble from "../images/habitaciondoble.jpg"
import Familiar from "../images/habiatcionfamiliar.jpg"
import king from "../images/habiatacionking.jpg"
import queen from "../images/habitacionqueen.jpeg"
import Huesped from "../images/huespedes.png"
import Tamaño from "../images/tamaño.png"
import Cama from "../images/cama (1).png"



function Habitaciones() {
    return (
        <div>
            <section class="w-full mx-auto mb- bg-gray-50 dark:bg-gray-900 dark:text-white">
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={HaIndividual} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                    <h1 class="flex-auto text-xl font-bold dark:text-gray-50">Habitacion Individual</h1>
                                    <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">Desde $110.00 por noche</div>
                                    <div class="flex-none w-full mt-2 text-lg font-medium text-[#0D3B66] dark:text-gray-300">Detalles
                                        <h1><img src={Huesped} class="h-8 w-8" alt="Descripción de la imagen" />Huespedes: 1</h1>
                                        <h1><img src={Tamaño} class="h-8 w-8" alt="Descripción de la imagen" />Tamaño: 12 m2</h1>
                                        <h1><img src={Cama} class="h-8 w-8" alt="Descripción de la imagen" />Tipo de cama: Individual</h1>
                                    </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                                </div>
                                <div class="flex mb-4 text-sm font-medium">
                                    <button type="button"
                                        class="py-2 px-4 bg-[#76AB7A] hover:bg-[#0D3B66] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Reservar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
                    <div class="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                    <h1 class="flex-auto text-xl font-bold dark:text-gray-50">Habitacion Doble</h1>
                                    <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">Desde $125.00 por noche</div>
                                    <div class="flex-none w-full mt-2 text-lg font-medium text-[#0D3B66] dark:text-gray-300">Detalles
                                        <h1><img src={Huesped} class="h-8 w-8" alt="Descripción de la imagen" />Huespedes: 1</h1>
                                        <h1><img src={Tamaño} class="h-8 w-8" alt="Descripción de la imagen" />Tamaño: 12 m2</h1>
                                        <h1><img src={Cama} class="h-8 w-8" alt="Descripción de la imagen" />Tipo de cama: Individual</h1>
                                    </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                                </div>
                                <div class="flex mb-4 text-sm font-medium">
                                    <button type="button"
                                        class="py-2 px-4 bg-[#76AB7A] hover:bg-[#0D3B66] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Reservar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg xs:rounded-sm" src={doble} alt="billboard image" />
                    </div>
                </div>
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={Familiar} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                    <h1 class="flex-auto text-xl font-bold dark:text-gray-50">Habitacion Familar</h1>
                                    <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">Desde $200.00 por noche</div>
                                    <div class="flex-none w-full mt-2 text-lg font-medium text-[#0D3B66] dark:text-gray-300">Detalles
                                        <h1><img src={Huesped} class="h-8 w-8" alt="Descripción de la imagen" />Huespedes: 1</h1>
                                        <h1><img src={Tamaño} class="h-8 w-8" alt="Descripción de la imagen" />Tamaño: 12 m2</h1>
                                        <h1><img src={Cama} class="h-8 w-8" alt="Descripción de la imagen" />Tipo de cama: Grande</h1>
                                    </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">

                                </div>
                                <div class="flex mb-4 text-sm font-medium">
                                    <button type="button"
                                        class="py-2 px-4 bg-[#76AB7A] hover:bg-[#0D3B66] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Reservar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
                    <div class="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                    <h1 class="flex-auto text-xl font-bold dark:text-gray-50">Habitacion King</h1>
                                    <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">Desde $250.00 por noche</div>
                                    <div class="flex-none w-full mt-2 text-lg font-medium text-[#0D3B66] dark:text-gray-300">Detalles
                                        <h1><img src={Huesped} class="h-8 w-8" alt="Descripción de la imagen" />Huespedes: 1</h1>
                                        <h1><img src={Tamaño} class="h-8 w-8" alt="Descripción de la imagen" />Tamaño: 12 m2</h1>
                                        <h1><img src={Cama} class="h-8 w-8" alt="Descripción de la imagen" />Tipo de cama: Grande</h1>
                                    </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">

                                </div>
                                <div class="flex mb-4 text-sm font-medium">
                                    <button type="button"
                                        class="py-2 px-4 bg-[#76AB7A] hover:bg-[#0D3B66] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Reservar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg xs:rounded-sm" src={king} alt="billboard image" />
                    </div>
                </div>
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={queen} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                    <h1 class="flex-auto text-xl font-bold dark:text-gray-50">Habitacion Queen</h1>
                                    <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">Desde $200.00 por noche</div>
                                    <div class="flex-none w-full mt-2 text-lg font-medium text-[#0D3B66] dark:text-gray-300">Detalles
                                        <h1><img src={Huesped} class="h-8 w-8" alt="Descripción de la imagen" />Huespedes: 1</h1>
                                        <h1><img src={Tamaño} class="h-8 w-8" alt="Descripción de la imagen" />Tamaño: 12 m2</h1>
                                        <h1><img src={Cama} class="h-8 w-8" alt="Descripción de la imagen" />Tipo de cama: Grande</h1>
                                    </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">

                                </div>
                                <div class="flex mb-4 text-sm font-medium">
                                    <button type="button"
                                        class="py-2 px-4 bg-[#76AB7A] hover:bg-[#0D3B66] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Reservar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Habitaciones;
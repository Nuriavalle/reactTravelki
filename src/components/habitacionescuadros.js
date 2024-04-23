import HaIndividual from "../images/individual.jpg"
import doble from "../images/habitaciondoble.jpg"
import Familiar from "../images/habiatcionfamiliar.jpg"
import king from "../images/habiatacionking.jpg"
import queen from "../images/habitacionqueen.jpeg"



function Habitaciones() {
    return (
        <div>
            <section class="w-full mx-auto mb-6 bg-gray-50 dark:bg-gray-900 dark:text-white">
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-3 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={HaIndividual} alt="billboard image" />
                    </div>
                    <div>
                    <form class="flex-auto p-6">
            <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">Product name</h1>
                <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">In stock</div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                
            </div>
            <div class="flex mb-4 text-sm font-medium">
                <button type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
                    now</button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
        </form>


                    </div>
                </div>
                
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={Familiar} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Habitacion Familiar</h2>
                        <h2 class="text-2xl font-semibold text-[#0D3B66] dark:text-white">Detalles</h2>

                        <ul class="list-disc list-inside">
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                        </ul>
                    </div>
                </div>
                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
                    <div class="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Habitacion king</h2>
                        <h2 class="text-2xl font-semibold text-[#0D3B66] dark:text-white">Detalles</h2>

                        <ul class="list-disc list-inside">
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                        </ul>
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
                        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Habitacion Queen</h2>
                        <h2 class="text-2xl font-semibold text-[#0D3B66] dark:text-white">Detalles</h2>
                        <ul class="list-disc list-inside">
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                        </ul>
                    </div>
                </div>
            </section>






        </div>

    );
};

export default Habitaciones;
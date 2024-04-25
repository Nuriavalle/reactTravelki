import Pinos from "../images/Entre-Pinos-Portada.jpg"
import Fara from "../images/salalosfara.jpg"
import Cuarto from "../images/instalacioneslosfara.jpg"

function Opciones() {
    return (
      <div>
        <section class="text-gray-600 body-font">
          

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Opciones que podrian interesarte</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-24 h-20" src={Pinos} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Hotel EntrePinos
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Chalatenango, San Ignacio
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $100/noche
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-24 h-20" src={Fara} alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Hotel Los Farallones
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            La Libertad
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $183/noche
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-24 h-20" src={Cuarto} alt="Michael image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Hotel Marsella
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            El Tamarindo, La Uniòn 
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $250/noche
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

        </section>
      </div>
    );
  };
  export default Opciones;
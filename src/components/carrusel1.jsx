import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imagen1 from "../images/fachada.png"
import imagen2 from "../images/cuarto2.jpg"
import imagen3 from "../images/living.jpg"
import imagen4 from "../images/piscina.jpg"
import imagen5 from "../images/comedor.jpg"


function Carrusel() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container ml-12 w-32 h-12 text-lg  py-1 border-4 text-center font-medium text-black focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        FOTOS
      </div>
      <div class="container px-5 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
          <Carousel>
            <div>
              <img src={imagen1} className="" />
            </div>
            <div>
              <img src={imagen2} />
            </div>
            <div>
              <img src={imagen3} />
            </div>
            <div>
              <img src={imagen4} />
            </div>
            <div>
              <img src={imagen5} />
            </div>
          </Carousel>
        </div>
        <div class="lg:w-3/12 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
    </section>
  );
};

export default Carrusel
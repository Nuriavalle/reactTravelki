import Bar from "../images/martini.png"
import AireAcon from "../images/aire-acondicionado.png"
import Piscina from "../images/piscina.png"
import Spa from "../images/flor-de-loto.png"
import Parqueo from "../images/vehiculo.png"
import Cafeteria from "../images/cafeteria.png"
import Gimnasio from "../images/peso.png"
import Wifi from "../images/wifi.png"

function Servicios() {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-16 py-8 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -m-4">
                    <h1 class="sm:text-3xl text-2xl font-medium text-left title-font text-gray-900 mb-4">SERVICIOS  DEL HOTEL HOLIDAY INN</h1>
                    <p class="text-base leading-relaxed mx-auto">El Holiday Inn San Salvador ofrece recepción 24 horas, un gimnasio y una piscina al aire libre, así como conexión Wi-Fi gratuita y aparcamiento gratuito. Las habitaciones cuentan con aire acondicionado, el hotel tiene un restaurante y cafetería, el Essenza Café, que presenta un ambiente moderno.</p>
                </div>
                <div class="flex flex-wrap m-4">
                    <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <img src={Bar}/>
                                </span>Bar
                            </a>
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <img src={AireAcon}/>
                                </span>Aire Acondicionado
                            </a>
                        </nav>
                    </div>
                    <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <img src={Piscina}/>
                                </span>Piscina
                            </a>
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <img src={Spa}/>
                                </span>Spa
                            </a>
                        </nav>
                    </div>
                    <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <img src={Parqueo}/>
                                </span>Parqueo
                            </a>
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                <img src={Cafeteria}/>
                                </span>Cafeteria
                            </a>
                        </nav>
                    </div>
                    <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <img src={Gimnasio}/>
                                </span>Gimnasio
                            </a>
                            <a>
                                <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                <img src={Wifi}/>
                                </span>Wifi
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="w-1/3">
          
        </div>
        <div class="w-1/2">
          
        </div>
        </section>


    );
};
export default Servicios;
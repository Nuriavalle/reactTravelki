import logoSesion from "../images/foto2.png"
import logoUsuario from "../images/usuario.png"
function InicioSesion (){
    return (
        
        <div>

            <div class="py-16">
    <div class="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class=" lg:block lg:w-1/2 bg-cover bg-bgInicioSesion">
            <img src={logoSesion} class="h-28 pl-6"/>
            <h2 class="text-3xl font-semibold font-sans italic mt-2 mb-6 text-gray-700 text-center">Iniciar sesion</h2>

            <div class=" h-[450px] overflow-hidden flex items-center px-8 justify-center">
                <div class="bg-white bg-opacity-60 w-full shadow-3xl rounded-2xl">
                  <div class="shadow shadow-gray-200 absolute left-1/2 transform -translate-x-[225%] -translate-y-1/2 rounded-full p-4 md:p-8">
                    <img src={logoUsuario} class="w-16 h-16"/>
                  </div>
                  <form class="p-12 md:p-16">
                    <div class="flex items-center text-lg mb- md:mb-8">
                        <label class="normal-case font-medium text-sky-900 text-base font-sans" for="grid-first-name"/>
                            Usuario
                      <input type="text" id="usuario" class="bg-white rounded-2xl border border-amber-700 pl-4 py-2 md:py-2 focus:outline-none w-full" />
                    </div>
                    <div class="flex items-center text-lg mb-6 md:mb-8">
                        <label class="normal-case font-medium text-sky-900 text-base font-sans" for="grid-first-name"/>
                          Contraseña  
                      <input type="password" id="contraseña" class="bg-white rounded-2xl border border-amber-700 pl-4 py-1 md:py-2 focus:outline-none w-full" />
                      <hr class="border-amber-700 mt-4"/>

                    </div>
                    <button class="bg-sky-900 font-medium ring-offset-slate-200	 drop-shadow-2xl shadow-2xl md:p-2 text-white w-full rounded-full">Acceder</button>
                    
                  </form>
                </div>
               </div>
        </div>
        <div class="bg-sky-900 w-full p-8 lg:w-1/3">
            <h2 class="text-2xl font-bold italic mt-20 text-yellow-100 text-center">¿Todavia no tienes una cuenta?</h2>
            <p class="text-lg italic text-yellow-100 text-center">¡Inicia sesión y encuentra tu hogar lejos de casa en un solo clic!</p>
            <div class="mt-8">
                <button class="bg-white text-sky-900 font-bold py-2 px-2 w-full rounded-full hover:bg-yellow-100">Registrate</button>
            </div>

            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" class="text-xs italic text-center text-yellow-100 uppercase">o</a>
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
           
            
            <div class="mt-8">
                <button class="bg-white text-sky-900 font-bold py-2 px-4 w-full rounded-full hover:bg-yellow-100">Registra tu hotel</button>
            </div>
            <div class="mt-6  items-right text-gray-100 pt-8">
                <hr class="border-gray-300"/>
                <button class="bg-sky-900 text-white text-left italic py-2 px-2 w-full underline">Olvidaste tu contraseña?</button>
              
            </div>
            
            
            </div>
        </div>
        </div>




        </div>



);
};

export default InicioSesion;

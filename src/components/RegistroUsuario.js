
function RegistroUsuario() {
    return (
        <div>
            <div class="flex justify-center py-8 items-center h-100 bg-bgRegistroUsuario bg-cover bg-center">
                <div class="bg-gray-100 shadow-lg shadow-black-500/50 mx-auto shadow-gray-950  w-1/2 rounded-3xl   shadow-2xl drop-shadow-2xl">
                    <h1 class="text-2xl text-gray-500 font-medium text-center pt-5 italic pb-4">Registrate aquí</h1>
                    <form id="formulario" class="w-full max-w-lg container mx-auto px-3">
                        <label class="normal-case font-medium text-gray-500 text-base font-sans mb-2" for="grid-first-name">
                            Nombres
                        </label>
                        <input id="nombres" class="flex w-full pr-30 rounded-md mb-1 border border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text" name="nombres" />
                        <label class="normal-case font-medium text-gray-500 text-base font-sans  mb-2" for="grid-first-name">
                            Apellidos
                        </label>
                        <input id="apellidos" class="flex w-full pr-30 rounded-md border border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text" name="apellidos" />
                        <label class="normal-case font-medium text-gray-500 text-base font-sans  mb-2" for="grid-first-name">
                            Correo electronico
                        </label>
                        <input id="correo_electronico" class="flex w-full pr-30 rounded-md mb-1 border border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text" />
                        <label class="normal-case font-medium text-gray-500 text-base font-sans  mb-2" for="grid-first-name">
                            Fecha de nacimiento
                        </label>
                        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" class="flex w-full pr-30 rounded-md border mb-1 border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <label class="normal-case font-medium text-gray-500 text-base font-sans  mb-2" for="grid-first-name">
                            Usuario
                        </label>
                        <input id="usuario" class="flex w-full pr-30 rounded-md border mb-1 border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text" name="usuario" />
                        <label class="normal-case font-medium text-gray-500 text-base font-sans  mb-2" for="grid-first-name">
                            Contraseña
                        </label>
                        <input id="contrasena" class="flex w-full pr-30 rounded-md border mb-1 border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="contrasena" type="password" placeholder="******************" />
                        <label class="normal-case font-medium text-gray-500 text-base font-sans  mb-2" for="grid-first-name">
                            Confirme su contraseña
                        </label>
                        <input id="confirmar_contrasena" class="flex w-full pr-30 rounded-md border mb-3 border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="confirmar_contrasena" type="password" placeholder="******************" />
                        <div class="text-center">
                            <input id="link-checkbox" type="checkbox" value="" class="text-blue-600 bg-gray-500 border border-amber-700 rounded focus:ring-blue-500 dark:bg-gray-700" name="link-checkbox" />
                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-500">He leido y acepto los <span class="text-sky-800 dark:text-sky-800 hover:underline">terminos y condiciones </span>del sitio.</label>
                        </div>
                        <div class="text-center py-4">
                            <button class="bg-sky-800 hover:bg-blue-700 text-white font-medium-2 pr-10 pl-10 py-2 px-4  rounded-full">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default RegistroUsuario;
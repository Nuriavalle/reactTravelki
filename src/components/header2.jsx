function Header2 (){
    return (
        
        <header class="fixed top-0 left-0 w-full bg-gray-50 bg-opacity-45 bg-clip-padding blur-backdrop-filter shadow-md z-50">
        
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="Images/LogoTRAVELKIRIA PNG.png" alt="Logo de la empresa" class="object-contain h-20 mb-4"/>
                </a>
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-[#0D3B66]">Inicio</a>
                <a class="mr-5 hover:text-[#0D3B66]">Nosotros</a>
                <a class="mr-5 hover:text-[#0D3B66]">Servicios</a>
              </nav>
              <button class="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 mr-1">Registrar hotel</button>
              <button class="inline-flex items-center border-2 border-[#0D3B66] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 mr-1">Registrate</button>
              <button class="inline-flex items-center bg-[#0D3B66] border-0 py-1 px-8 focus:outline-none hover:bg-[#1D588F] rounded-full text-white mt-4 md:mt-0">Inicia sesión</button>
              </div>
       
    </header>
    
    );
};

export default Header2;
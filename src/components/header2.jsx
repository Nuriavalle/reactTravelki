import logoBlanco from "../images/foto3.png"


function Header2 (){
    return (
        
      <header class="bg-sky-800 text-white flex items-end">
        
      <img src={logoBlanco} alt="Imagen de ejemplo" width="250"/>

      <div class="container mx-auto text-end mb-8 pb-3">
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
   
  </nav>
  <button class="inline-flex items-center py-1 px-8 underline text-base mt-4 md:mt-0 mr-1">INICIO</button>
  <button class="inline-flex items-center border-2 border-white  py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 mr-1">REGISTRA TU HOSPEDAJE</button>
  <button class="inline-flex items-center border-2 border-white py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-2 mr-1">REGISTRATE</button>
  <button class="inline-flex items-center bg-[#9a3412] border-2 border-[#9a3412] py-1 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-white mr-8 mt-4 md:mt-0">INICIA SESIÒN</button>
  </div>
</header>
    
    );
};

export default Header2;
import React, {useState, useEffect} from 'react';
import Descripcion from "./Descripcion";
import Servicios from "./Servicios";
import Reseñas from "./Reseñas";




function Tabs() {
  const [mostrarContenido, setMostrarContenido] = useState(1);
  console.log("mostrarContenido==>", mostrarContenido);
  const cambiarContenido = (idContenido) => {
    setMostrarContenido(idContenido);

  };


  return (
    <section className=" lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-gray-600 body-font ">
      {/* <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col"> */}
        <div className="flex mx-auto flex-wrap">
          <a onClick={() => cambiarContenido(1)}
            className={`${(mostrarContenido == 1) ? 'bg-gray-100 border-gray-300 text-indigo-500' : 'bg-green-600 border-gray-300 text-white'} sm:px-6 py-3 w-1/2 sm:w-auto justify-center border title-font font-medium  inline-flex items-center leading-none  tracking-wider`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            </svg>STEP 1
          </a>
          <a onClick={() => cambiarContenido(2)}
            className={`${(mostrarContenido == 2) ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:px-6 py-3 w-1/2 sm:w-auto justify-center border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider rounded-t`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            </svg>STEP 2
          </a>
          <a onClick={() => cambiarContenido(3)}
            className={`${(mostrarContenido == 3) ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:px-6 py-3 w-1/2 sm:w-auto justify-center border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider rounded-t`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            </svg>STEP 3
          </a>


        </div>

        {(mostrarContenido == 1) && <Descripcion />}
        {(mostrarContenido == 2) && <Servicios />}
        {(mostrarContenido == 3) && <Reseñas />}


      
    </section>
  );
};

export default Tabs
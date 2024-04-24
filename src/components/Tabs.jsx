import React, { useState, useEffect } from 'react';
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
    <section className="text-gray-600 w-1/2 body-font">
      <div className="container px-5 py-4 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-2">
          <a onClick={() => cambiarContenido(1)}
            className={`${(mostrarContenido == 1) ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-left leading-none  tracking-wider rounded-t`}>
            DESCRIPCION
          </a>
          <a onClick={() => cambiarContenido(2)}
            className={`${(mostrarContenido == 2) ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider rounded-t`}>
            SERVICIOS
          </a>
          <a onClick={() => cambiarContenido(3)}
            className={`${(mostrarContenido == 3) ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider rounded-t`}>
            RESEÑAS
          </a>
        </div>

        {(mostrarContenido == 1) && <Descripcion />}
        {(mostrarContenido == 2) && <Servicios />}
        {(mostrarContenido == 3) && <Reseñas />}

      </div>
    </section>
  );
};
export default Tabs
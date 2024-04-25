import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

function BarraDeCalendario() {
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState('');

  useEffect(() => {
    fetch('https://api.npoint.io/19485e724f0fe2228641')
      .then(response => response.json())
      .then(data => setDepartamentos(data.departamentos))
      .catch(error => console.error('Error fetching departamentos:', error));
  }, []);

  return (
    <div className="container bg-[#0D3B66] mx-auto justify-center items-center pl-4">
      <input type="date" className="border-2 drop-shadow-lg w-50 p-2 mt-4 mx-2 mb-4"></input>
      <input type="date" className="border-2 drop-shadow-lg w-50 p-2 mt-4 mx-2 mb-4"></input>
      <select name="Departamentos" id="opciones" className="border-2 drop-shadow-lg w-80 p-2 mt-4 mx-2 mb-4" value={selectedDepartamento} onChange={(event) => setSelectedDepartamento(event.target.value)}>
        <option value="">Selecciona un departamento</option>
        {departamentos.map(departamento => (
          <option key={departamento.codigo} value={departamento.codigo}>
            {departamento.nombre}
          </option>
        ))}
      </select>
      <button className="border-black drop-shadow-lg p-2 mt-4 ml-2 w-[200px] bg-[#5E8C61] text-white">Consultar disponibilidad</button>
    </div>
  );
}

export default BarraDeCalendario;

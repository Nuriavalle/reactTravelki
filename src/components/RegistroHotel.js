import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

function RegistroHotel() {
    const [departamentos, setDepartamentos] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [selectedMunicipio, setSelectedMunicipio] = useState('');

    useEffect(() => {
        fetch('https://1z185jnw-8000.use2.devtunnels.ms/api/index-departamento')
            .then(response => response.json())
            .then(data => setDepartamentos(data.departamentos))
            .catch(error => console.error('Error fetching departamentos:', error));
    }, []);

    const handleDepartamentoChange = (event) => {
        const departamentoCode = event.target.value;
        setSelectedDepartamento(departamentoCode);

        fetch(`https://1z185jnw-8000.use2.devtunnels.ms/api/municipio/departamento/${departamentoCode - 1}`)
            .then(response => response.json())
            .then(data => {
                const municipiosDelDepartamento = data.municipios;
                setMunicipios(municipiosDelDepartamento);
            })
            .catch(error => console.error('Error fetching municipios:', error));
    };

    const [formData, setFormData] = useState({
        nombre_hotel: '',
        correoElectronico: '',
        contacto: '',
        contrasena: '',
        confirmar_contrasena: '',
        direccion: '',
        departamento: '',
        municipio: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
        resetForm();
      };

      const resetForm = () => {
        setFormData({
          nombre_hotel: '',
          correoElectronico: '',
          contacto: '',
          contraseña: '',
          confirmar_contraseña: '',
          direccion: '',
          departamento: '',
          municipio: ''
        });
      };

    return (
        <div>
            <div className="flex justify-center py-8 items-center h-100 bg-bgRegistroHotel bg-cover bg-center">
                <div className="bg-gray-100 shadow-lg shadow-black-500/50 mx-auto shadow-gray-950 h-auto w-1/2 rounded-3xl shadow-2xl drop-shadow-2xl">
                    <h1 className="text-2xl text-gray-500 font-medium text-center pt-4 italic pb-6">Registra tu <span className="text-sky-800 font-bold not-italic">h</span><span className="text-sky-800 font-bold not-italic">o</span><span className="text-green-700 font-bold not-italic">t</span><span className="text-yellow-400 font-bold not-italic">e</span><span className="text-red-700 font-bold not-italic">l</span> aquí</h1>
                    <form onSubmit={handleSubmit} id="formulario" className="w-full max-w-lg container mx-auto px-4">
                        <label htmlFor="nombre_hotel" className="normal-case font-medium text-gray-500 text-base font-sans  mb-2">Nombre del hotel</label>
                        <input id="nombre_hotel" value={formData.nombre_hotel} onChange={handleChange} className="flex w-full pr-30 rounded-md border border-amber-700 mb-2 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="nombre_hotel" required />
                        <label htmlFor="correoElectronico" className="normal-case font-medium text-gray-500 text-base font-sans  mb-2">Email</label>
                        <input id="correoElectronico" value={formData.correoElectronico} onChange={handleChange} className="flex w-full pr-30 rounded-md border border-amber-700 mb-2 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="correoElectronico" />
                        <label htmlFor="contacto" className="normal-case font-medium text-gray-500 text-base font-sans mb-2">Contacto</label>
                        <InputMask
                            id="contacto"
                            mask="9999-9999"
                            className="flex w-full pr-30 rounded-md border mb-1 border-amber-700 px-4 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            name="contacto"
                            value={formData.contacto}
                            onChange={handleChange} />
                        <label htmlFor="contrasena" className="normal-case font-medium text-gray-500 text-base font-sans  mb-2">Contraseña</label>
                        <input id="contrasena" value={formData.contrasena} onChange={handleChange} className="flex w-full pr-30 rounded-md border border-amber-700 mb-2 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="password" name="contrasena" placeholder="******************" />
                        <label htmlFor="confirmar_contrasena" className="normal-case font-medium text-gray-500 text-base font-sans  mb-2">Confirme su contraseña</label>
                        <input id="confirmar_contrasena" value={formData.confirmar_contrasena} onChange={handleChange} className="flex w-full pr-30 rounded-md border border-amber-700 mb-2 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="password" name="confirmar_contrasena" placeholder="******************" />
                        <label htmlFor="direccion" className="normal-case font-medium text-gray-500 text-base font-sans  mb-2">Dirección</label>
                        <input id="direccion" value={formData.direccion} onChange={handleChange} className="flex w-full pr-30 rounded-md border border-amber-700 mb-2 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="direccion"/>
                        <label htmlFor="departamento">Departamento</label>
                        <select
                            id="departamento"
                            value={selectedDepartamento}
                            onChange={handleDepartamentoChange}
                            className="flex w-full pr-30 rounded-md border border-amber-700 mb-2 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option value="">Selecciona un departamento</option>
                            {departamentos.map(departamento => (
                                <option key={departamento.codigo} value={departamento.codigo}>
                                    {departamento.nombre}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="municipio">Municipio</label>
                        <select
                            id="municipio"
                            value={selectedMunicipio}
                            onChange={event => setSelectedMunicipio(event.target.value)}
                            className="flex w-full pr-30 rounded-md border mb-4 border-amber-700 mb-2 py-1 px-4 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option value="">Selecciona un municipio</option>
                            {municipios.map(municipio => (
                                <option key={municipio.id_mun} value={municipio.id_mun}>
                                    {municipio.nombre}
                                </option>
                            ))}
                        </select>
                        <div className="text-center">
                            <input id="link-checkbox" type="checkbox" value="" name="link-checkbox" required className="w-4 h-4 text-blue-600 bg-gray-500 border border-amber-700 rounded focus:ring-blue-500 dark:bg-gray-700" />
                            <label htmlFor="link-checkbox" className="text-sm font-medium text-gray-500">He leído y acepto los <span className="text-sky-800 dark:text-sky-800 hover:underline">términos y condiciones </span>del sitio.</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-sky-800 hover:bg-blue-700 text-white font-medium-2 pr-10 pl-10 py-2 px-4 mb-8 mt-2 rounded-full">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default RegistroHotel;

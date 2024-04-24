
function BarraDeCalendario() {
  return (
    <div class="container bg-[#0D3B66] mx-auto justify-center items-center pl-4">
      <input type="date" class="border-2 drop-shadow-lg w-50 p-2 mt-4 mx-2 mb-4"></input>
      <input type="date" class="border-2 drop-shadow-lg w-50 p-2 mt-4 mx-2 mb-4"></input>
      <select name="Departamentos" id="opciones" class="border-2 drop-shadow-lg w-80 p-2 mt-4 mx-2 mb-4">
        <option value="san_salvador" disabled selected hidden>Departamentos</option>
        <option value="la_libertad">San Salvador</option>
        <option value="santa_Ana">La libertad</option>
        <option value="chalatenango">Santa Ana</option>
        <option value="chalatenango">Chalatenango</option>
      </select>
      <select name="Departamentos" id="opciones" class="border-2 drop-shadow-lg w-80 p-2 mt-4 mx-2 mb-4">
        <option value="san_salvador" disabled selected hidden>Tipo de habitación</option>
        <option value="la_libertad">Suite</option>
        <option value="santa_Ana">Individual</option>
        <option value="chalatenango">Doble</option>
        <option value="chalatenango">Familiar</option>
        <option value="chalatenango">King</option>
        <option value="chalatenango">Queen</option>
      </select>
      <button class=" border-black drop-shadow-lg p-2 mt-4 ml-2 w-[200px] bg-[#5E8C61] text-white">Consultar disponibilidad</button>
    </div>
  )
}
export default BarraDeCalendario;
function FiltroLateral() {
  return (
    <div class="flex flex-wrap -mx-2 mt-auto mb-auto lg:w-1/3 sm:w-1/2 content-start sm:pr-10">
      <div class="bg-[#F2F0EF] w-[350px] p-4 h-[600px]">
        <h1 class="text-[#0D3B66] font-bold text-md">Reservar por:</h1>
        <br />
        <label for="Departamentos">Departamentos</label>
        <select
          name="Departamentos"
          id="opciones"
          class="rounded-full border border-3 border-[#0D3B66] p-2 w-80 mt-2 mb-4"
        >
          <option value="san_salvador" selected>
            San Salvador
          </option>
          <option value="la_libertad">La libertad</option>
          <option value="santa_Ana">Santa Ana</option>
          <option value="chalatenango">Chalatenango</option>
        </select>
        <label for="Tipo de habitación">Tipo de habitación</label>
        <select
          name="Departamentos"
          id="opciones"
          class="rounded-full border border-3 border-[#0D3B66] p-2 w-80 mt-2 mb-4"
        >
          <option value="san_salvador" selected>
            Suite
          </option>
          <option value="la_libertad">Individual</option>
          <option value="santa_Ana">Doble</option>
          <option value="chalatenango">Familiar</option>
          <option value="chalatenango">King</option>
          <option value="chalatenango">Queen</option>
        </select>
        <label for="Precio">Precio</label>
        <select
          name="Departamentos"
          id="opciones"
          class="rounded-full border border-3 border-[#0D3B66] p-2 w-80 mt-2 mb-4"
        >
          <option value="san_salvador" selected>
            $60-$90
          </option>
          <option value="la_libertad">$100-$250</option>
          <option value="santa_Ana">$300-$450</option>
          <option value="chalatenango">$500-$650</option>
        </select>
        <label for="Calificación">Calificación</label>
        <select
          name="Departamentos"
          id="opciones"
          class="rounded-full border border-3 border-[#0D3B66] p-2 w-80 mt-2 mb-4"
        >
          <option value="san_salvador" selected>
            Buena
          </option>
          <option value="la_libertad">Muy buena</option>
          <option value="santa_Ana">Excelente</option>
        </select>
        <label for="Servicios">Servicios</label>
        <select
          name="Departamentos"
          id="opciones"
          class="rounded-full border border-3 border-[#0D3B66] p-2 w-80 mt-2 mb-4"
        >
          <option value="san_salvador" selected>
            Gym
          </option>
          <option value="la_libertad">Restaurante</option>
          <option value="santa_Ana">Buffet</option>
          <option value="santa_Ana">Piscina</option>
          <option value="santa_Ana">Servicio a la habitación/Limpieza</option>
        </select>
      </div>
    </div>
  )
}
export default FiltroLateral; 
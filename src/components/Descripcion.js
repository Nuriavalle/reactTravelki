import logoHoliday from "../images/Holiday_Inn_Logo.svg.png"

function Descripcion() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-16 py-10 mx-auto bg-[#ECEFF4] flex flex-wrap">
        <div class="w-1/3">
          <img src={logoHoliday} class="h-32 w-34"></img>
        </div>
        <div class="w-1/2">
          <p class="text-xl font-sans font-medium pb-2 text-[#0D3B66]"> DESCRIPCION DEL HOTEL</p>
          <p class="font-sans text-[#0D3B66]">"Ya sea que visite por negocios o placer, el Hotel Holiday Inn® San Salvador es su opción ideal, con amenidades de alta calidad, excelente servicio y una incomparable ubicación en la ciudad."</p>
        </div>
      </div>
    </section>
  );
};
export default Descripcion
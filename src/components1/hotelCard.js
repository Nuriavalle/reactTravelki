import Hotel1 from "../assets/imagenes/hoteles/hotel 1.jpg";
import Ubicacion from "../assets/imagenes/hoteles/ubicacion.png";
import Cama from "../assets/imagenes/hoteles/cama.png";
import RatingExcelente from "./excelente";


function HotelCard() {
  return (
    <div class="lg:w-2/3 sm:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 bg-[#FAF0CA]">
      <div class="container px-2 mx-auto flex flex-wrap">
        <div class="border-[3px] bg-[#F8F8F8] rounded-full border-gray-300 border-opacity-40 p-6 flex items-center shadow-xl">
          <div class="lg:w-1/3 sm:w-1/2 w-full mx-8">
            <img src={Hotel1} class="rounded-xl w-full h-[160px]"></img>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 w-full mr-8">
            <h1 class="font-bold text-xl mb-2">Hotel "Las Tunas"</h1>
            <p class="text-gray-700 text-base">
              Encantador hotel frente al mar con tres habitaciones y una terraza
              espectacular. Con vistas panorámicas
            </p>
            <div class="lg:w-1/3 sm:w-1/2 w-full mr-4 flex items-center">
              <p class="mr-2 text-[#0D3B66]">Calificación:</p>
              <RatingExcelente /> 
              <p class="ml-2 text-[#0D3B66] font-bold">Excelente.</p>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 w-full border-l-4 border-gray-600 border-opacity-50 pl-4 ml-4">
            <div class="flex items-center mb-4">
              <img src={Cama} class="w-8 h-8 mr-2"></img>
              <p>2 Camas king</p>
            </div>
            <div class="flex items-center">
              <img src={Ubicacion} class="w-8 h-8 mr-2"></img>
              <p>Las Tunas, Sonsonate.</p>
            </div>
            <div class="mt-4">
              <button class="bg-[#0D3B66] text-white w-[190px] p-4 px-8 py-1 hover:bg-[#1D588F] rounded-lg">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

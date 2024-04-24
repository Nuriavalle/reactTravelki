import ImgServicios from "../assets/imagenes/servicios/servicios.jpg";
import Reservacion from "../assets/imagenes/servicios/Reserva.png";
import Segmentación from "../assets/imagenes/servicios/segmentacion.png";
import Promocion from "../assets/imagenes/servicios/promocion.png";

function Servicios() {
  return (
    <section class="relative mt-[700px]" id="Servicios">
      <img
        src={ImgServicios}
        class="w-full h-auto object-cover blur-[2px]"
        alt="#"
      />
      <div class="absolute inset-x-0 top-0 ml-[470px] mt-[65px] w-[400px] text-center py-4 border-2 border-[#F4D353] drop-shadow-lg p-4 rounded-lg bg-[#F4D353]">
        <h1 class="text-5xl font-bold text-[#0D3B66] text-center italic">Servicios</h1>
      </div>
      {/* <!-- Contenedor de las columnas --> */}
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="flex space-x-10">
          <div class="flex flex-col w-[300px] max-w-lg p-8 text-center shadow-2xl lg:mx-auto rounded-2xl border-2 border-[#FAF0CA] bg-black opacity-60 h-[480px]">
            <h2 class="mt-2 text-lg font-semibold tracking-widest text-white uppercase">
              Reservación
            </h2>
            <div class="flex items-center justify-center">
              <img
                class="inline-block object-cover object-center w-20 h-20 mt-2 mb-2"
                src={Reservacion}
                alt="Reservacion"
              />
            </div>
            <p class="mx-auto text-base leading-relaxed text-white">
              Este servicio permite a los usuarios explorar una amplia gama de
              opciones de alojamiento, desde hoteles de lujo hasta opciones más
              económicas, y realizar reservas de habitaciones de acuerdo a sus
              necesidades y preferencias específicas.
            </p>
          </div>
          <div class="flex flex-col w-[300px] max-w-lg p-8 text-center shadow-2xl lg:mx-auto rounded-2xl border-2 border-[#FAF0CA] bg-black opacity-60 h-[480px] mb-8">
            <h2 class="mt-2 text-lg font-semibold tracking-widest text-white uppercase">
              Promoción
            </h2>
            <div class="flex items-center justify-center">
              <img
                class="inline-block object-cover object-center w-20 h-20 mt-2 mb-2"
                src={Promocion}
                alt="Reservacion"
              />
            </div>
            <p class="mx-auto pb-10 text-base leading-relaxed text-white">
              Travelkiria ofrece a los propietarios de hoteles locales en El Salvador
              a aumentar su visibilidad y atraer a más clientes de manera que los hoteles
              puedan aprovechar una variedad de herramientas y características para destacarse entre
              la competencia y conectar con los viajeros de manera efectiva.
            </p>
          </div>
          <div class="flex flex-col w-[300px] max-w-lg p-8 text-center shadow-2xl lg:mx-auto rounded-2xl border-2 border-[#FAF0CA] bg-black opacity-60 h-[480px]">
            <h2 class="mt-2 text-lg font-semibold tracking-widest text-white uppercase">
              Segmentación
            </h2>
            <div class="flex items-center justify-center">
              <img
                class="inline-block object-cover object-center w-20 h-20 mt-2 mb-2"
                src={Segmentación}
                alt="Segmentacion"
              />
            </div>
            <p class="mx-auto text-base leading-relaxed text-white">
              El servicio de segmentación de alojamiento se centra en ofrecer
              opciones variadas y adaptadas a las preferencias y necesidades
              específicas de los huéspedes. Esto se logra dividiendo las opciones
              de alojamiento en diferentes segmentos según la ubicación, el precio
              y el tipo de habitación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Servicios;

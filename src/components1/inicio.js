import Header from "./header";
import CarouselComponents from "./carousel";
import BarraDeCalendario from "./barraDeCalendario";
import InfoHoteles from "./infoHoteles";
import Nosotros from "./nosotros";
import Servicios from "./servicios";

function Inicio() {
    return (
        <div id="Inicio">
            <CarouselComponents />
            <BarraDeCalendario />
            <InfoHoteles />
            <Nosotros />
            <Servicios />
        </div>
    )
}
export default Inicio;
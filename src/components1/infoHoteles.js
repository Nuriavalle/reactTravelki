import FiltroLateral from "./filtroLateral";
import HotelCard from "./hotelCard";

function InfoHoteles() {
  return (
    <div class="container px-5 py-2 mx-auto flex flex-wrap">
      <FiltroLateral />
      <HotelCard />
    </div>
  );
}
export default InfoHoteles;

import FiltroLateral from "./filtroLateral";
import HotelCard from "./hotelCard";

function InfoHoteles() {
  return (
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <FiltroLateral />
      <HotelCard />
    </div>
  );
}
export default InfoHoteles;

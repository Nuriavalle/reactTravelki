import "animate.css"
import Imagen1 from '../assets/imagenes/carousel/imagen1.jpg'
import Imagen2 from '../assets/imagenes/carousel/imagen2.jpg'
import Imagen3 from '../assets/imagenes/carousel/imagen3.jpg'
import Imagen4 from '../assets/imagenes/carousel/imagen4.jpg'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarouselComponents() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="max-w-full mx-auto " id='Carrusel'>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={4000}
      >

        <div className='w-full h-[600px]'>
          <img className='w-full' src={Imagen1}></img>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center animate__animated animate__bounceIn">
            <p className="text-white text-5xl font-bold textoTvl">"Tu hogar lejos de casa, reserva en un clic”.</p>
          </div>
        </div>

        <div className='w-full h-[600px]'>
          <img className='w-full' src={Imagen2}></img>
        </div>

        <div className='w-full h-[600px]'>
          <img className='w-full' src={Imagen3}></img>
        </div>

        <div className='w-full h-[600px]'>
          <img className='w-full' src={Imagen4}></img>
        </div>
      </Carousel>
    </div>
  )
}
export default CarouselComponents;
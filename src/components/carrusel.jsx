import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fachada from '../images/fachada.png';
import living from '../images/living.jpg';
import habitacionImage from '../images/habiatacionking.jpg';
import comedorImage from '../images/comedor.jpg';
import piscina from '../images/piscina.jpg';

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: fachada },
    { id: 2, src: comedorImage },
    { id: 3, src: piscina },
    { id: 4, src: habitacionImage },
    { id: 5, src: living },
  ];

  const numImages = images.length;
  const thumbnailWidth = 100 / numImages; 

  return (
    <section className="text-gray-600 body-font">
      <div className="container ml-12 w-32 h-12 text-lg py-1 border-4 text-center font-medium text-black focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        FOTOS
      </div>
      <div className="container px-5 mx-auto flex flex-wrap items-center">
        <div className="lg:w-8/12 h-4/5 md:pr-16 lg:pr-0 pr-0">
          <Carousel selectedItem={currentIndex}>
            {images.map((image, index) => (
              <div key={index} style={{ width: '100%', height: '500px' }}>
                <div className="h-128">
                  <img src={image.src} alt={`Image ${index}`} className="h-full" />
                </div>
              </div>
            ))}
          </Carousel>
          <div className="flex justify-center mt-4 h-32"> 
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Thumbnail ${index}`}
                className="object-cover cursor-pointer mr-2"
                style={{ width: `${thumbnailWidth}%`, height: '100%' }} 
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrusel;

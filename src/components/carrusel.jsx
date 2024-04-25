import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carrusel() {
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?count=10&client_id=Nppj_gPu-CNwOuCBbQWUd3rfNwLzKanXVABzF9wxuMg'
        );
        if (response.ok) {
          const data = await response.json();
          setImages(data);
          const thumbnailUrls = data.map((image) => image.urls.thumb);
          setThumbnails(thumbnailUrls);
        } else {
          console.error('Error fetching images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container ml-12 w-32 h-12 text-lg py-1 border-4 text-center font-medium text-black focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        FOTOS
      </div>
      <div className="container px-5 mx-auto flex flex-wrap items-center">
        <div className="lg:w-8/12 h-4/5 md:pr-16 lg:pr-0 pr-0">
          <Carousel selectedItem={currentIndex}>
            {images.map((image, index) => (
              <div key={index} style={{ width: '100%', height: '400px' }}>
                <div className="h-128">
                  <img src={image.urls.regular} alt={`Image ${index}`} className="h-full" />
                </div>
              </div>
            ))}
          </Carousel>
          <div className="flex justify-center mt-4">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index}`}
                className="w-16 h-16 object-cover cursor-pointer mr-2"
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
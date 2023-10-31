import React, { useState } from 'react';
import { Cars } from '../Api/api'; // Importe a interface Cars do seu arquivo API
import '../Styles/Carousel.css'

interface CarCarouselProps {
  carList: Cars[];
}

function CarCarousel({ carList }: CarCarouselProps) {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  const nextCar = () => {
    setCurrentCarIndex((currentCarIndex + 1) % carList.length);
  };

  const previousCar = () => {
    setCurrentCarIndex(
      (currentCarIndex - 1 + carList.length) % carList.length
    );
  };

  return (
    <div className="car-carousel">
      <button className="prev" onClick={previousCar}>
        &#10094;
      </button>
      {carList.map((car, index) => (
        <div
          key={index}
          className={`car-slide ${
            index === currentCarIndex ? 'active' : ''
          }`}
        >
          <img src={car.imagem} alt={car.name} /> {/* Ajuste as propriedades de acordo com a interface Cars */}
          <h3>{car.name}</h3>
        </div>
      ))}
      <button className="next" onClick={nextCar}>
        &#10095;
      </button>
    </div>
  );
}

export default CarCarousel;
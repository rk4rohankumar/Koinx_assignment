import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCarousel = ({ cards }) => {
  const sliderRef = useRef(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of cards to show
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...carouselSettings} ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={card.image} alt={`Card ${index + 1}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-between mt-4">
        <button onClick={() => sliderRef.current.slickPrev()} className="px-4 py-2 bg-blue-500 text-white rounded">
          Previous
        </button>
        <button onClick={() => sliderRef.current.slickNext()} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default CardCarousel;

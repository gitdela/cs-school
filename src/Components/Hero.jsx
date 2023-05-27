import React, { useState, useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import image1 from '../Assets/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg';
import image2 from '../Assets/alan-rodriguez-N17Nkbsc-zY-unsplash.jpg';
import image3 from '../Assets/chang-duong-KrfID_ZQxWs-unsplash.jpg';
import image4 from '../Assets/javier-trueba-iQPr1XkF5F0-unsplash.jpg';
import image5 from '../Assets/santi-vedri-O5EMzfdxedg-unsplash.jpg';

const Hero = () => {
  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  useEffect(() => {
    // Preload images
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.url;
    });
  }, [slides]);

  return (
    <div className='flex flex-col group h-[780px] w-full mx-auto py-16 pt-20 relative'>
      <div
        style={{
          background: `url(${slides[currentIndex].url})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 30%',
          backgroundRepeat: 'no-repeat',
        }}
        className='w-full h-full'
      ></div>
      <div
        onClick={prevSlide}
        className='lg:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-customOrange cursor-pointer lg:group-hover:block'
      >
        <BsArrowLeftShort size={30} />
      </div>
      <div className='lg:hidden absolute top-[50%] -translate-x-0 tranlate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-customOrange cursor-pointer lg:group-hover:block'>
        <BsArrowRightShort size={30} />
      </div>
    </div>
  );
};

export default Hero;

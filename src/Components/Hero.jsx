import React, { useState } from 'react';
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

  return (
    <div className='group h-[780px] w-full mx-auto py-16 pt-20 relative'>
      <div
        style={{
          background: `url(${slides[2].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full h-full duration-500'
      ></div>
      <div className='hidden absolute top-[50%] -translate-x-0 tranlate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-customOrange cursor-pointer group-hover:block duration-300'>
        <BsArrowLeftShort size={30} />
      </div>
      <div className='hidden absolute top-[50%] -translate-x-0 tranlate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-customOrange cursor-pointer group-hover:block duration-300'>
        <BsArrowRightShort size={30} />
      </div>
    </div>
  );
};

export default Hero;

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
      heading: 'Junior High School',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum ipsum necessitatibus consectetur enim illum, nostrum vitae dolorem animi doloremque delectus dignissimos nulla suscipit nobis magni sednam! Dicta, vitae. Nulla quaerat tenetur vero incidunt sunt commodi? Sed et a perferendis animi? Eligendi quis enim deleniti sapiente sed.Quas numquam error, esse velit quibusdam molesiae tenetur consequuntur exercitationem dolorum expedita!',
    },
    {
      url: image2,
      heading: 'Primary',
      description:
        'In this code, the overlay is created by adding an absolute-positioned div with a gradient background as a child of the main div. The gradient goes from black at the bottom to transparent at the top, creating the dark overlay effect. The text is positioned using the absolute class and adjusted with bottom-8 to ensure it appears above the overlay.',
    },
    {
      url: image3,
      heading: 'Creche',
      description:
        'I apologize for the confusion. It seems there was an oversight in my previous response. To achieve the desired dark overlay effect, you can utilize the before pseudo-element in CSS. Heres an updated version of the code that includes the overlay',
    },
    {
      url: image4,
      heading: 'Sports',
      description:
        'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn mor',
    },
    {
      url: image5,
      heading: 'Graduation',
      description:
        'i have this hero section with an image slider, how do i create a dark overlay in the bottom 10% to add text to it in tailwind? i want the overlay to be like a gradient from bottom that becomes transparent about 10% of the height of the image going up so that i can add the text to the dark part below. describer the problem and help me so this',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(4);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='group h-[780px] pt-20 relative'>
      <img
        src={slides[currentIndex].url}
        alt=''
        className='w-full h-full object-cover'
      />
      <div
        onClick={prevSlide}
        className='lg:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-customOrange cursor-pointer z-30 lg:group-hover:block'
      >
        <BsArrowLeftShort size={30} />
      </div>
      <div
        onClick={nextSlide}
        className='lg:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-customOrange cursor-pointer z-30 lg:group-hover:block'
      >
        <BsArrowRightShort size={30} />
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-black to-transparent z-10'></div>

      <div className='absolute right-[50%] translate-x-[50%] text-2xl font-bold text-gray-400 top-[90%] italic z-20 sm:text-3xl'>
        {slides[currentIndex].heading}
      </div>
    </div>
  );
};

export default Hero;

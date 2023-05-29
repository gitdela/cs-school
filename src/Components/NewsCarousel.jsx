import React from 'react';
import img1 from '../Assets/news/abubakar-balogun-OlJk99PX0Os-unsplash (1).jpg';
import img2 from '../Assets/news/adam-winger-J-HgsaXrY6Y-unsplash (1).jpg';
import img3 from '../Assets/news/shoeib-abolhassani-EjghAJjPNdo-unsplash (1).jpg';
import img4 from '../Assets/news/yustinus-tjiuwanda-BCBGahg0MH0-unsplash (1).jpg';

const NewsCarousel = () => {
  return (
    <div className='w-full flex items-center my-4 py-8 justify-center bg-customOrange'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
          <div className='h-96 w-72'>
            <img
              src={img1}
              alt=''
              className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
            <h1 className='font-dmserif text-3xl font-bold text-white'>
              World Children Day
            </h1>
            <p className='text-lg italic opacity-0 group-hover:opacity-100 transition-opacity text-white mb-3 duration-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ullam magnam quis nostrum? Fugiat, sapiente.
            </p>
            <button
              className='font-com rounded-full border-none bg-customYellow
            py-2 px-3.5 text-sm capitalize text-white'
            >
              read more
            </button>
          </div>
        </div>
        <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
          <div className='h-96 w-72'>
            <img
              src={img2}
              alt=''
              className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
            <h1 className='font-dmserif text-3xl font-bold text-white'>
              Career Day
            </h1>
            <p className='text-lg italic opacity-0 group-hover:opacity-100 transition-opacity text-white mb-3 duration-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ullam magnam quis nostrum? Fugiat, sapiente.
            </p>
            <button
              className='font-com rounded-full border-none bg-customYellow
            py-2 px-3.5 text-sm capitalize text-white'
            >
              read more
            </button>
          </div>
        </div>
        <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
          <div className='h-96 w-72'>
            <img
              src={img3}
              alt=''
              className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
            <h1 className='font-dmserif text-3xl font-bold text-white'>
              Creativity Day
            </h1>
            <p className='text-lg italic opacity-0 group-hover:opacity-100 transition-opacity text-white mb-3 duration-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ullam magnam quis nostrum? Fugiat, sapiente.
            </p>
            <button
              className='font-com rounded-full border-none bg-customYellow
            py-2 px-3.5 text-sm capitalize text-white'
            >
              read more
            </button>
          </div>
        </div>
        <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
          <div className='h-96 w-72'>
            <img
              src={img4}
              alt=''
              className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
            <h1 className='font-dmserif text-3xl font-bold text-white'>
              Exam Starts
            </h1>
            <p className='text-lg italic opacity-0 group-hover:opacity-100 transition-opacity text-white mb-3 duration-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ullam magnam quis nostrum? Fugiat, sapiente.
            </p>
            <button
              className='font-com rounded-full border-none bg-customYellow
            py-2 px-3.5 text-sm capitalize text-white'
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;

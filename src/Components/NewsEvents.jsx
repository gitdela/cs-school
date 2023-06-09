import React from 'react';

const NewsEvents = () => {
  return (
    <section className='flex flex-col max-w-screen-xl py-4 px-2 mx-auto space-y-4 justify-center items-center'>
      <div className='text-gray-800 text-center relative md:text-start'>
        <h2 className='text-xl font-bold mb-12 text-center'>
          Latest News & School Events
        </h2>
        <div className='absolute bg-customOrange '></div>
      </div>
    </section>
  );
};

export default NewsEvents;

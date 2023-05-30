import React from 'react';
import { GiAchievement } from 'react-icons/gi';

const WelcomeMain = () => {
  return (
    <section className='w-screen py-12 px-4'>
      <div className='max-w-screen-xl mx-auto space-y-12 justify-between text-center sm:text-start sm:flex sm:space-y-0 sm:mt-4 gap-20 sm:text-xl'>
        <div className='flex flex-col justify-start space-y-8 items-between sm:w-1/2'>
          <h1 className='text-2xl font-bold'>
            Welcome to
            <br /> Crystal Heights School
          </h1>
          <p className=''>
            There are two distinctive aims which underpin the entire work of our
            school.
          </p>
          <button className='text-lg w-full mx-auto sm:ml-0'>About Us</button>
        </div>
        <div className='flex flex-col items-center space-y-8 sm:w-1/2'>
          <div className='mt-4 sm:mt-0'>
            <GiAchievement
              size={100}
              className='text-customOrange mx-auto sm:ml-0'
            />
            <h3 className='font-bold my-4 text-2xl'>Achieving Success</h3>
            <p>
              Encouraging high aspirations and a love of learning, whilst
              maximising potential. Offering diverse and rewarding opportunities
              for all and celebrating successes.
            </p>
          </div>
          <div className='mt-4'>
            <GiAchievement
              size={100}
              className='text-customOrange mx-auto sm:ml-0'
            />
            <h3 className='font-bold my-4 text-2xl'>Achieving Success</h3>
            <p className=''>
              Encouraging high aspirations and a love of learning, whilst
              maximising potential. Offering diverse and rewarding opportunities
              for all and celebrating successes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMain;

import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';

const TopBar = () => {
  return (
    <div className='w-full hidden bg-slate-400 lg:block'>
      <div className='max-w-screen-xl mx-auto flex text-white justify-around px-4 py-2'>
        <div className='flex items-center text-sm'>
          <p className='whitespace-nowrap mr-3'>Give us a call</p>
          <BsTelephoneFill size={15} className='mr-1' />
          <p className='whitespace-nowrap'>
            (+233) 24 920 3351 | kendelanartey@gmail.com
          </p>
        </div>
        <div className='whitespace-nowrap italic text-xl font-bold'>
          <p>Enrolling Now! For September 2023</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

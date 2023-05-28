import React from 'react';
import { IoIosSchool } from 'react-icons/io';
import { GiTeacher } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';

const Welcome = () => {
  return (
    <main className='flex flex-col max-w-screen-xl py-4 px-2 mx-auto space-y-4 justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-black text-lg pb-3'>Welcome to</h1>
        <h1 className='text-black text-xl font-bold'>
          Crystal Heights School for Children
        </h1>
      </div>
      <p className='text-center text-sm p-1 pb-2'>
        Our mission dolor, sit amet consectetur adipisicing elit. Ipsa
        exercitationem quisquam ipsum repellendus autem vero voluptatum. Hic eum
        molestiae quos quas sit cumque aliquam sunt!
      </p>
      <div className='w-full flex justify-center m-4 space-x-2 sm:space-x-20 items-center'>
        <div className='bg-customYellow flex flex-col items-center justify-center py-3 w-1/3 cursor-pointer text-center'>
          <h1 className='text-sm font-bold mb-2'>ENROLL</h1>
          <IoIosSchool size={80} />
        </div>
        <div className='bg-customYellow flex flex-col items-center justify-center py-3 w-1/3 cursor-pointer text-center'>
          <h1 className='text-sm font-bold mb-2'>TEACH</h1>
          <GiTeacher size={80} />
        </div>
        <div className='bg-customYellow flex flex-col items-center justify-center py-3 w-1/3 cursor-pointer text-center'>
          <h1 className='text-sm font-bold mb-2'>STAFF</h1>
          <GrUserWorker size={80} />
        </div>
      </div>
    </main>
  );
};

export default Welcome;

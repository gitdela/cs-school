import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className='max-w-screen-xl px-4 mx-auto'>
      <h1 class='font-bold text-center text-2xl py-8 mb-3'>
        Upcoming Events at Crystal Heights School
      </h1>

      <div className='w-full space-y-4 sm:gap-4 text-sm sm:w-1/2'>
        <div class='card-container grid grid-cols-3 gap-2 w-full bg-white shadow-md'>
          <div className='bg-customOrange col-span-1/2 flex justify-center'>
            <div class='date  flex flex-col justify-center items-center text-gray-700'>
              <div class='day font-light'>02</div>
              <div class='month font-semibold'>JUNE</div>
            </div>
          </div>
          <div class='info-container col-span-2 py-2 flex flex-col justify-center items-start'>
            <div class='event-name font-bold pb-2 text-base'>Revision Week</div>
            <div class='event-location font-light'>
              Students revise their notes this week for exams
            </div>
          </div>
        </div>
        <div class='card-container grid grid-cols-3 gap-2 w-full bg-white shadow-md'>
          <div className='bg-customOrange col-span-1/2 flex justify-center'>
            <div class='date  flex flex-col justify-center items-center text-gray-700'>
              <div class='day font-light'>09</div>
              <div class='month font-semibold'>JUNE</div>
            </div>
          </div>
          <div class='info-container col-span-2 py-2 flex flex-col justify-center items-start'>
            <div class='event-name font-bold pb-2 text-base'>Exams Start</div>
            <div class='event-location font-light'>
              Summer Exams before the long holidays
            </div>
          </div>
        </div>
        <div class='card-container grid grid-cols-3 gap-2 w-full bg-white shadow-md'>
          <div className='bg-customOrange col-span-1/2 flex justify-center'>
            <div class='date  flex flex-col justify-center items-center text-gray-700'>
              <div class='day font-light'>24</div>
              <div class='month font-semibold'>JUNE</div>
            </div>
          </div>
          <div class='info-container col-span-2 py-2 flex flex-col justify-center items-start'>
            <div class='event-name font-bold pb-2 text-base'>Vacation Day</div>
            <div class='event-location font-light'>
              Students vacate today for the long holidays
            </div>
          </div>
        </div>
        <div className='pb-12 flex justify-center items-center'>
          <button className='w-full text-lg text-gray-100'>
            View Full Calendar
          </button>
        </div>
      </div>

      <div className='w-1/2'></div>
    </div>
  );
};

export default UpcomingEvents;

import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const FullCalendar = () => {
  const accordions = [
    {
      id: 1,
      term: 'Term 1',
      news: [
        {
          id: 1,
          day: '02 JUNE',
          title: 'Revision Week',
          desc: 'Students revise their notes this week for exams',
        },
        {
          id: 2,
          day: '09 JUNE',
          title: 'Exams Start',
          desc: 'Summer Exams before the long holidays',
        },
        {
          id: 3,
          day: '11 SEPTEMBER',
          title: 'School Re-opens',
          desc: 'Students are expected back in school',
        },
      ],
    },
    {
      id: 2,
      term: 'Term 2',
      news: [
        {
          id: 1,
          day: '02 SEPTEMBER',
          title: 'Activity Week',
          desc: 'Students settle in',
        },
        {
          id: 2,
          day: '09 SEPTEMBER',
          title: 'PTA Meeting @ 9 AM',
          desc: 'It is compulsory for all parents and guardians',
        },
        {
          id: 3,
          day: '11 SEPTEMBER',
          title: 'School Re-opens',
          desc: 'Students are expected back in school',
        },
      ],
    },
  ];

  const [showAccordions, setShowAccordions] = useState(
    Array(accordions.length).fill(false)
  );

  const toggleAccordion = (index) => {
    setShowAccordions((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };
  return (
    <div className='wrapper pt-24'>
      <h1 className='text-center text-2xl xs:text-3xl font-semibold'>
        Full 2022/23 Academic Schedule
      </h1>

      <div className='max-w-screen-xl mx-auto w-full px-4'>
        {accordions.map(({ id, term, news }, index) => (
          <React.Fragment key={id}>
            <div
              onClick={() => toggleAccordion(index)}
              className='bg-customOrange flex mt-8 px-2 py-4 justify-between items-center cursor-pointer'
            >
              <h3 className='text-xl font-bold'>{term}</h3>
              <BiChevronDown
                className={`text-2xl ${
                  showAccordions[index] ? 'rotate-180' : ''
                } transition-all duration-300`}
              />
            </div>
            <AnimatePresence>
              {showAccordions[index] &&
                news.map(({ day, title, desc, id }) => (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    key={id}
                    className='overflow-hidden px-2'
                  >
                    <div className='pt-8 pb-1'>
                      <h4 className='font-bold text-green-700'>
                        {day} - {title}
                      </h4>
                    </div>
                    <p className='text-sm md:text-base'>{desc}</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FullCalendar;

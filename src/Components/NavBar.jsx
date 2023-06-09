import React, { useState } from 'react';
import BrandName from '../Assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'courses',
    },
    {
      id: 4,
      link: 'admissions',
    },
    {
      id: 5,
      link: 'calendar',
    },
    {
      id: 6,
      link: 'join us',
    },
  ];
  return (
    <nav className='w-full fixed text-black bg-customOrange/90 z-50'>
      <div className='max-w-screen-xl mx-auto flex h-20 justify-between items-center px-4'>
        <img src={BrandName} className='h-4/5' alt='' />
        <ul className='hidden lg:flex px-4'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='capitalize font-bold text-gray-600 text-base'
            >
              <Link to={`/${link}`} className='hover:text-customOrange'>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {/* {hamburger menu} */}
        <div
          onClick={() => setNav(!nav)}
          className='lg:hidden mr-4 cursor-pointer z-10'
        >
          {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>
        {/* {mobile menu} */}
      </div>
      {!nav && (
        <ul className='flex flex-col bg-customYellow/95 justify-center items-center absolute inset-0 h-screen w-full px-4 xxs:space-y-6'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='capitalize font-bold text-base text-gray-600 xxs:text-xl xs:text-2xl sm:text-4xl '
            >
              <Link to={`/${link}`} className='hover:text-customOrange'>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

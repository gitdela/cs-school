import React, { useState, useEffect } from 'react';
import BrandName from '../Assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
    <nav className='w-full fixed text-black bg-customYellow/80'>
      <div className='max-w-screen-xl mx-auto flex h-20 justify-between items-center px-4'>
        <img src={BrandName} className='h-full' alt='' />
        <ul className='hidden lg:flex px-4'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='capitalize font-bold text-gray-600 text-base'
            >
              <a href='#' className='hover:text-customOrange'>
                {link}
              </a>
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
        <ul className='flex flex-col bg-customYellow/80 space-y-12 justify-start items-center absolute left-0 right-0 h-screen w-full ease-in px-4 py-16'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='capitalize font-bold text-gray-600 text-4xl'
            >
              <a href='/' className='hover:text-customOrange'>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

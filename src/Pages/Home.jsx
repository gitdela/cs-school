import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import WelcomeMain from '../Components/WelcomeMain';
import UpcomingEvents from '../Components/UpcomingEvents';
import NewsCarousel from '../Components/NewsCarousel';

import React from 'react';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WelcomeMain />
      <UpcomingEvents />
      <NewsCarousel />
    </div>
  );
};

export default Home;

import React from 'react';
// import TopBar from './Components/TopBar';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import WelcomeMain from './Components/WelcomeMain';
// import NewsEvents from './Components/NewsEvents';
import NewsCarousel from './Components/NewsCarousel';

function App() {
  return (
    <div>
      {/* <TopBar /> */}
      <NavBar />
      <Hero />
      <WelcomeMain />
      {/* <NewsEvents /> */}
      <NewsCarousel />
    </div>
  );
}

export default App;

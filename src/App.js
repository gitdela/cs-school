import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

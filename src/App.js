import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cs-school' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

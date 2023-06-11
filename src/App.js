import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/Calendar' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

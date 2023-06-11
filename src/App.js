import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/cs-school' element={<Home />} />
          <Route path='/Calendar' element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import React from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Components/pages/Home';
import Schedule from './Components/pages/Schedule';
import Users from './Components/pages/Users';
import Graphics from './Components/pages/Graphics';
import RealTime from './Components/pages/RealTime'
import Energy from './Components/pages/Energy';
import mqttReact from './Components/mqttReact';
window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {

return (
  <div className = "App" > 
 <Router>
    <Navbar />
         <Routes>
            <Route exact path="/"   element= {<Home />}></Route>
            <Route path="/Energy"   element={<Energy />}></Route>
            <Route path='/Graphics' element={<Graphics />}></Route>
            <Route path="/Schedule" element={<Schedule />}></Route>
            <Route path="/Users"    element={<Users />} ></Route>
            <Route path='/RealTime' element={<RealTime />}></Route>
            <Route path='/mqttReact' component={mqttReact} element={<mqttReact />}></Route>
         </Routes>
    </Router>
  </div>
    );
  }

export default App;


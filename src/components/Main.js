import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home.js';
import NotFound from './NotFound.js';
import Builder from './Builder.js';
import ComponentDetails from './ComponentDetails.js';
function Main  (){
    return(
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/build" element={<Builder/>}/>
            <Route exact path="/component/:componentId" element={<ComponentDetails/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        
      </Router>
);
}
export default Main;


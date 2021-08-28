// import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import AboutUs from './AboutUs';
import Classes from './Classes';
import ContactUs from './ContactUs';
import Signup from './Signup';
import { useEffect, useState } from "react";
import axios from "axios";
import image from './image';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={AboutUs} />
    <Route path="/classes" component={Classes} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/signup" component={Signup} />
    </Switch>
    
    </div>
    
   
    </Router>



  );
}

const HomePage = () =>(
  <div>
    <h1>Home page</h1>
  </div>
);
export default App;

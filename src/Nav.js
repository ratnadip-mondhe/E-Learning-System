import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

        const navStyle =  {
            color:'white'
        };

  return (
    <nav className="nav">
     <h1> Logo</h1>
     <ul className="nav-links mt-3 ">
       <Link style={navStyle} class="badge rounded-pill bg-secondary" to="/home"><li>Home</li></Link>
        
    <Link style={navStyle} class="badge rounded-pill bg-secondary" to="/about" >   <li>AboutUs</li> </Link> 
    <Link style={navStyle} class="badge rounded-pill bg-secondary" to="/classes">    <li>Classes</li> </Link>
    <Link style={navStyle} class="badge rounded-pill bg-secondary" to="/contactus">     <li>ContactUs</li> </Link>
    <Link style={navStyle} className ="btn btn-success me-3 badge rounded-pill bg-dark" to="/signup"><li>Signup</li></Link>
     </ul>
    </nav>
  );
}

export default Nav;

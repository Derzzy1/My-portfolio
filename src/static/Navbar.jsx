import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {Link} from 'react-router-dom';


const Navbar = () => {
return (
    <nav className=" header">
      <div className=" nav">

        <img src="/images/lg1.jpeg" alt="" className="img"/>
        <div className= "nav-links">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <Link to="/Projects" className="hi">
            Projects
          </Link>
          <Link to="/contacts" className="hi">
            Contacts
          </Link>
          </div>
        </div>
    </nav>
  );
};


export default Navbar;
 
        

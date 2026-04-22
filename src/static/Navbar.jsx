import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {Link} from 'react-router-dom';


function Navbar()  {
const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className=" header">
      <div className=" nav">

        <img src="/images/lg1.jpeg" alt="" className="img"/>
        <div className="hamburger">
          onClick = {() => setIsOpen(!isOpen)}
             { isOpen ? <X size={28}/> : <Menu size={28} /> }
          </div>
        < div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <Link to="/Projects" className="">
            Projects
          </Link>
          <Link to="/contacts" className="">
            Contacts
          </Link>
          </div>
          
        </div>
    </nav>
  );
};


export default Navbar;
 
        

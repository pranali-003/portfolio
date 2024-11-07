import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Home from '../../pages/home/Home'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
            <h2>
              <Link to='/' className="header-link">PN</Link>  
            </h2>
        </div>
        <div className="header-right">
            <div>
            <Link  className="header-link" to='/'>Home </Link>
            </div>
            <div>
            <Link  className="header-link" to='/projects'>Projects </Link>
            </div>
            <div >
            <Link className="header-link" to='/about'>About</Link>
            </div>
            {/* <div >
            <Link  className="header-link" to="/contact">Contact</Link>
            </div> */}
        </div>
      </header>
    </>
  )
}

export default Header

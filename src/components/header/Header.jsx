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
              <Link to='/' className="header-link">Pranali Nage</Link>  
            </h2>
        </div>
        <div className="header-right">
        <div  className="icon"><FaGithub size={30}/></div>
        <div  className="icon"><MdOutlineEmail size={30}/> </div>
        <div  className="icon"><FaLinkedin size={30}/></div>
        </div>
      </header>
    </>
  )
}

export default Header

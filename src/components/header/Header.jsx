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
        <div className="icon"><a href="https://github.com/pranali-003/" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a></div>
        <div  className="icon"><a href="https://pranalinage20@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail size={30}/> </a></div>
        <div  className="icon"><a href="https://www.linkedin.com/in/pranali-nage-269881270/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a></div>
        </div>
      </header>
    </>
  )
}

export default Header

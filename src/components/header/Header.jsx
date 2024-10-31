import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
            <p>Pranali Nage</p>
        </div>
        <div className="header-right">
        <div  className="icon"><FaGithub size={30}/></div>
        <div  className="icon"><MdOutlineEmail size={30}/> </div>
        <div  className="icon"><FaLinkedin size={30}/></div>
        </div>
      </div>
    </>
  )
}

export default Header

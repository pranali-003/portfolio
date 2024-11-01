import React from "react";
import "./about.css";
import Header from "../../components/header/Header";
import Footer from "../../components/fotter/Footer";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import image from '../../assets/image.jpeg';
const About = () => {
  return (
    <>
      <Header />
      < div className="about-section">
        
          <div className="about-left">
            <img src={image} alt="not found" />
            <div className="social">
              <div className="socials"><FaGithub size={35} /> </div>
                <div className="socials"><MdOutlineEmail size={35} /> </div>
                <div className="socials"><FaLinkedin size={35} /></div>
            </div>
          
          </div>
          <div className="about-right">
            <p className="about-heading">About Me</p>
            <div className="loader" > 
              <hr/>
            </div>
           
            <br />
            <p>
              I am a passionate Software Developer from Chhatrapati
              Samhbajinagar, Maharashtra, India. With a keen interest in
              exploring new technologies, I am constantly amazed by the progress
              we, as a human species, have made in recent years.
            </p>
            <br />
            <p>
              My primary focus lies in web development, where I harness the
              power of JavaScript and PHP to create dynamic and interactive
              websites. I find great joy in experimenting with different
              frameworks and libraries, such as React, React Native, and NextJS,
              to enhance the user experience and deliver efficient solutions.
            </p>
            <br />
            <p>
              I believe that the world of technology is a never-ending learning
              journey, and I am committed to expanding my knowledge and skills
              to contribute to its growth.
            </p>
            <br />
            <p className="skill-heading">Skills</p>
            <div className="loader" > 
              <hr/>
            </div>
            <br />
            <div className="about-bottom">
              <div className="skill-icon">
                <FaReact className="skill-icon" size={35} />
                <FaHtml5 className="skill-icon" size={35} />
                <FaCss3 className="skill-icon" size={35} />
                <IoLogoJavascript className="skill-icon" size={35} />
                <FaNodeJs className="skill-icon" size={35} />
                <SiExpress className="skill-icon" size={35} />
                <SiMongodb className="skill-icon" size={35} />
                <BsBootstrap className="skill-icon" size={35} />
                <FaGitAlt className="skill-icon" size={35} />
                <SiPostman className="skill-icon" size={35} />
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

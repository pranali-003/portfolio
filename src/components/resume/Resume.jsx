import React from "react";
import "./resume.css";
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
import { MdColorLens, MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import photo from "../../assets/photo.jpg";
// import Layout from "../../components/layout/Layout";

const Resume = () => {
  return (
    <>
      <div div className="about-section">
        <div className="about-right">
          <p className="about-heading">
            Hello, I'm <br />
            <span style={{ color: "white" }}>Pranali Nage</span>{" "}
          </p>
          <div className="loader">
            <hr />
            <br />
            <p>
              I am a passionate Software Developer. My primary focus lies in web
              development, where I harness the power of JavaScript to create
              dynamic and interactive websites. I find great joy in
              experimenting with different frameworks and libraries, such as
              React and React Native to enhance the user experience and deliver
              efficient solutions.
            </p>
            <br />
          </div>
          <div className="social">
            <div className="socials">
              <a
                href="https://github.com/pranali-003/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div className="socials">
              <a
                href="https://pranalinage20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail size={30} />{" "}
              </a>
            </div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/pranali-nage-269881270/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="about-left">
          <img src={photo} alt="not found" />
        </div>
      </div>
    </>
  );
};

export default Resume;

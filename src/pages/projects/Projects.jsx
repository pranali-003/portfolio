import React from 'react'
import './projects.css'
import Header from '../../components/header/Header'
import Footer from '../../components/fotter/Footer'


const Projects = () => {
  return (
    <>
      <Header/>
      <div className="projects-section">
        <div className="project-cards">
          <div className="pr-card card1">
            <p style={{fontSize:"20px"}}>Donation Platform</p>
            <br />
            <p>Created a middleware platform to facilitate more donations between NGOs and Potential Donors.</p>
            <p>Used MERN stack for effective implementation of the project.</p>
            <br />
            <a href="https://github.com/pranali-003/DonationPlatform">See project &rarr;</a>
          </div>
          <div className="pr-card card2">
          <p style={{fontSize:"20px"}}>Notes App</p>
            <br />
            <p>Created a  platform to manage and maintain daily notes to improve productivity and work efficiency.</p>
            <p>Used MERN stack for effective implementation of the project.</p>
            <br />
            <a href="https://github.com/pranali-003/notesApp">See project &rarr;</a>
          </div>
          <div className="pr-card card3">
          <p style={{fontSize:"20px"}}>Gemini AI Clone</p>
            <br />
            <p>Created a clone for Google's Gemini AI using Recat.js and the Gemini AI API. </p>
            <p>Used Recat.js, Material UI and Gemini AI API for implementation of the project.</p>
            <br />
            <a href="https://github.com/pranali-003/GeminiAPI">See project &rarr;</a>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Projects

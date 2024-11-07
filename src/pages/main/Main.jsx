// import React from 'react'
// import {Link} from 'react-router-dom'
// import './main.css'
// const Main = () => {
//   return (
//     <div className="container">
//     {/* <h1 className="title">Hey There !</h1>
//     <p className="title" style={{fontSize:"25px"}}>I'm Pranali Nage, a full-stack web Developer.</p> */}
//     <div className="grid">
//       <div className="card blue-card">
//         <Link to='/projects'>Projects &rarr;</Link>
//       </div>
//       <div className="card white-card">
//         <Link to='/work'>Work  &rarr; </Link>
//       </div>
//       <div className="card dark-card">
//         <Link to='/about'>About me  &rarr;</Link>
//       </div>
//       <div className="card yellow-card">
//         <Link to='/contact'>Contact  &rarr;</Link>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Main

import React from 'react'
import './main.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'


const Projects = () => {
  return (
   
      <>

      <div className="projects-section">
        <div className="project-heading">Projects</div>
        <div className="project-cards">
          <div className="pr-card card1">
            {/* <img className="project-image" src={project1} alt="not found" /> */}
            <p style={{fontSize:"20px"}}>Donation Platform</p>
            <br />
            <p>Created a middleware platform to facilitate more donations between NGOs and Potential Donors.</p>
            <p>Used MERN stack for effective implementation of the project.</p>
            <br />
            <a href="https://github.com/pranali-003/DonationPlatform">See project &rarr;</a>
          </div>
          <div className="pr-card card2">
          {/* <img className="project-image" src={project2} alt="not found" /> */}
          <p style={{fontSize:"20px"}}>Notes App</p>
            <br />
            <p>Created a  platform to manage and maintain daily notes to improve productivity and work efficiency.</p>
            <p>Used MERN stack for effective implementation of the project.</p>
            <br />
            <a href="https://github.com/pranali-003/notesApp">See project &rarr;</a>
          </div>
          <div className="pr-card card3">
            
          {/* <img className="project-image" src={project3} alt="not found" /> */}

          <p style={{fontSize:"20px"}}>Gemini AI Clone</p>
            <br />
            <p>Created a clone for Google's Gemini AI using Recat.js and the Gemini AI API. </p>
            <p>Used Recat.js, Material UI and Gemini AI API for implementation of the project.</p>
            <br />
            <a href="https://github.com/pranali-003/GeminiAPI">See project &rarr;</a>
          </div>

        </div>
      </div>
      </>
     
  )
}

export default Projects


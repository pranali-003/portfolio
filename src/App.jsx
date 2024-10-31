import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Notfound from './pages/Notfound'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route> 
        <Route path="/work" element={<Home/>}></Route>
        <Route path="/contact" element={<Home/>}></Route>



        <Route path="*" element={<Notfound/>}></Route>
        <Route></Route>

        
      </Routes>
    </Router>
      
    </>
  )
}

export default App

import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/fotter/Footer';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Hey There !</h1>
        <p  className="title" style={{fontSize:"25px"}}>I'm Pranali Nage, a full-stack web Developer.</p>
        <div className="grid">
          <div className="card blue-card">
            <Link to='/projects'>Projects &rarr;</Link>
          </div>
          <div className="card white-card">
            <Link to='/work'>Work  &rarr; </Link>
          </div>
          <div className="card dark-card">
            <Link to='/about'>About me  &rarr;</Link>
          </div>
          <div className="card yellow-card">
            <Link to='/contact'>Contact  &rarr;</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

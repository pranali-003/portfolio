import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/fotter/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Hey There !</h1>
        <p  className="title" style={{fontSize:"25px"}}>I'm Pranali Nage, a full-stack web Developer.</p>
        <div className="grid">
          <div className="card blue-card">
            <a href="#services">Projects &rarr;</a>
          </div>
          <div className="card white-card">
            <a href="#work">Work  &rarr; </a>
          </div>
          <div className="card dark-card">
            <a href="#about">About me  &rarr;</a>
          </div>
          <div className="card yellow-card">
            <a href="#contact">Contact  &rarr;</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

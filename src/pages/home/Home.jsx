import React from 'react';
import './home.css';
import Layout from '../../components/layout/Layout'
import Main from '../main/Main'
import Resume from '../../components/resume/Resume'

const Home = () => {
  return (
    <Layout>
      <Resume/>
      <Main/>
    </Layout> 
  );
};

export default Home;

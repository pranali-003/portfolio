import React from 'react';
import './home.css';
import Layout from '../../components/layout/Layout'
import Main from '../main/Main'
import Resume from '../../components/resume/Resume'
import Projects from '../../pages/projects/Projects'
import Article from '../../components/articles/Article'

const Home = () => {
  return (
    <Layout>
      
      <Resume/>
      <Main/>
      {/* <Projects/> */}
      <Article/>
    </Layout> 
  );
};

export default Home;

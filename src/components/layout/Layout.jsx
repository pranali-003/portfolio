import React from 'react'
import './layout.css'
import Header from '../../components/header/Header';
import Footer from '../../components/fotter/Footer';


const Layout = ({children}) => {
  return (
    <div className="layout">
       <Header />
       <main>{children}</main>
       <Footer />
    </div>
  )
}

export default Layout;

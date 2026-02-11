import React from 'react'
import { Outlet } from 'react-router-dom' 
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../common/features/Header';
import Footer from '../common/features/Footer';

function MainLayout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);
  return (
    <> 
        <Header/>
        <main className="main"> 
            <Outlet/> 
        </main>
        <Footer/>
         
    </>
  )
}

export default MainLayout

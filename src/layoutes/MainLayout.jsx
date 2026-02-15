import React from 'react'
import { Outlet } from 'react-router-dom' 
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../common/features/Header';
import Footer from '../common/features/Footer';
import NProgress from "nprogress";
import { useNavigation } from 'react-router-dom';

function MainLayout() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

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

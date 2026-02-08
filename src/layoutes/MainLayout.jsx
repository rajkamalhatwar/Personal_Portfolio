import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

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
        <header id="header" className="header d-flex align-items-center light-background sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">

                {/* <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src="assets/img/logo.webp" alt="">
            <h1 className="sitename">FolioOne</h1> 
            </a>  */}

            <nav id="navmenu" className="navmenu">
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                 
                {/* <li><a href="resume.html">Resume</a></li>
                <li><a href="Projects.html">Projects</a></li>
                <li><a href="portfolio.html">Creative Works</a></li> 
                <li><a href="contact.html">Contact</a></li> */}
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <div className="header-social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="https://github.com/rajkamalhatwar" className="github"><i className="bi bi-github"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/rajkamal-hatwar-2b014b1b5" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

            </div>
        </header>

        <main className="main"> 
            <Outlet/> 
        </main>

        <footer id="footer" className="footer"> 
            <div className="container"> 
            <div className="social-links d-flex justify-content-center">
                <a href=""><i className="bi bi-twitter-x"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href="https://github.com/rajkamalhatwar"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/rajkamal-hatwar-2b014b1b5"><i className="bi bi-linkedin"></i></a>
            </div> 
            </div>

        </footer>
    </>
  )
}

export default MainLayout

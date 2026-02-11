import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
   const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Scroll effect (header shadow / bg)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled')
      } else {
        document.body.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev)
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false)
  } 

  // Sync body class with state
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [mobileNavOpen])

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
                    <li><NavLink to="/" onClick={closeMobileNav}>Home</NavLink></li>
                    <li><NavLink to="/About" onClick={closeMobileNav}>About</NavLink></li>
                    <li><NavLink to="/Resume" onClick={closeMobileNav}>Resume</NavLink></li>
                    <li><NavLink to="/Projects" onClick={closeMobileNav}>Projects</NavLink></li>
                    <li><NavLink to="/CreativeWorks" onClick={closeMobileNav}>Creative Works</NavLink></li>
                    <li><NavLink to="/Contact" onClick={closeMobileNav}>Contact</NavLink></li> 
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMobileNav}></i>
            </nav>

            <div className="header-social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="https://github.com/rajkamalhatwar" className="github"><i className="bi bi-github"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/rajkamal-hatwar-2b014b1b5" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

            </div>
        </header>
    </>
  )
}

export default Header

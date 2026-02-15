import React from 'react'
import MyPhoto from '../../assets/img/profile/MyPhoto.jpeg';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useLoaderData } from 'react-router-dom';

function Home() {
  const typedRef = useRef(null);
  const homeData = useLoaderData();

  useEffect(() => { 
    const designationArray = homeData.designations
        .split(",")
        .map(item => item.trim());

    const typed = new Typed(typedRef.current, {
      strings: designationArray,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);
  return (
    <>
    <div className='index-page'>
        {/* Hero Section   */}
        <section id="hero" className="hero section">

        <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
                <div className="hero-content">
                <h1 data-aos="fade-up" data-aos-delay="200">Hello, I'm <span className="highlight">{homeData.userName}</span></h1>
                {/* <h2 data-aos="fade-up" data-aos-delay="300">Creative <span className="typed" data-typed-items="Software Developer, Coder, Part-Time Artist"></span></h2> */}
                <h2 data-aos="fade-up" data-aos-delay="300">
                    Creative{" "}
                    <span className="typed highlight" ref={typedRef}></span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="400">{homeData.heroLine}</p>
                <div className="hero-actions" data-aos="fade-up" data-aos-delay="500">
                    <a href="Projects.html" className="btn btn-primary">View My Work</a>
                    <a href="contact.html" className="btn btn-outline">Get In Touch</a>
                </div>
                <div className="social-links" data-aos="fade-up" data-aos-delay="600">
                    <a href={homeData.twitterLink} target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    <a href={homeData.linkedInLink} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href={homeData.gitHubLink} target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="#"><i className="bi bi-dribbble"></i></a>
                </div>
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <div className="hero-image" data-aos="zoom-in" data-aos-delay="300">
                <div className="image-wrapper">
                    {/* <img src="assets/img/profile/profile-square-11.webp" alt="Sarah Mitchell" className="img-fluid"/>   */}
                    <img src={homeData.photoUrl} alt="Rajkamal Hatwar" className="img-fluid"/>
                    <div className="floating-elements">
                    <div className="floating-card design" data-aos="fade-left" data-aos-delay="700">
                        <i className="bi bi-palette"></i>
                        <span>Design</span>
                    </div>
                    <div className="floating-card code" data-aos="fade-right" data-aos-delay="800">
                        <i className="bi bi-code-slash"></i>
                        <span>Code</span>
                    </div>
                    <div className="floating-card creativity" data-aos="fade-up" data-aos-delay="900">
                        <i className="bi bi-lightbulb"></i>
                        <span>Ideas</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>

        </section>
        {/* /Hero Section   */}
    </div>
    </>
  )
}

export default Home

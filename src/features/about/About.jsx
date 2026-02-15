import React from 'react'
import MyPhoto from '../../assets/img/profile/MyPhoto.jpeg';
import { useLoaderData } from 'react-router-dom';

function About() {
  const aboutData = useLoaderData();
  return (
    <>
          {/* <!-- About Section --> */}
    <section id="about" className="about section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        {/* <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p> -->
      <!-- End Section Title --> */}</div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        {/* <!-- Intro + Photo --> */}
        <div className="row align-items-center justify-content-between gy-5 mb-5">
          <div className="col-lg-7" data-aos="fade-right" data-aos-delay="150">
            <div className="intro-content">
              <span className="eyebrow">Hello there</span>
              <h2 className="headline">Hi, I'm {aboutData.userName} - {aboutData.shortAbout}</h2>
              <p className="lead">
                {aboutData.longAbout}
              </p> 
              <div className="cta-group">
                <a href="#" className="btn-ghost">
                  View My Work <i className="bi bi-arrow-up-right"></i>
                </a>
                {/* <!-- <a href="#" className="link-underline">
                  Download Resume <i className="bi bi-download"></i>
                </a> --> */}
              </div>
            </div>
          </div>

          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="250">
            <figure className="profile-figure text-center text-lg-end">
              <img src={aboutData.photoUrl} alt="Portrait of Rajkamal" className="img-fluid profile-photo"/>
            </figure>
          </div>
        </div>
        {/* <!-- End Intro + Photo --> */}


      
      </div>

    </section>
    {/* <!-- /About Section --> */}
    </>
  )
}

export default About

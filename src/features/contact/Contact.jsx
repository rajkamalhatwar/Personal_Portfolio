import React from 'react'

function Contact() {
  return (
    <>
            
    <section id="contact" className="contact section">

       
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div> 

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>
              <p>You may reach out to me through the contact information provided below.</p>

              <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>My Location</h4>
                  <p>At. Post. Tarsa Tah. Maouda Dist. Nagpur</p>
                  <p>Maharashtra, India 441106</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+91 8379988428</p>  
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>rajkamalhatwar@gmail.com</p> 
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
              <h3>Get In Touch</h3>
              <p>This form is currently unable to submit your information, but I will make it functional for you.</p>

              <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">

                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                  </div>

                  <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                  </div>

                  <div className="col-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                  </div>

                  <div className="col-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit" className="btn">Send Message</button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

    </section>
     
    </>
  )
}

export default Contact

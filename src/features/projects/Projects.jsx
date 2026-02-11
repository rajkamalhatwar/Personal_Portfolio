import React from 'react'

function Projects() {
  return (
    <>
    <section id="services" className="services section"> 
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2> 
      </div>
       

      <div className="container" data-aos="fade-up" data-aos-delay="100"> 
        <div className="row justify-content-center g-5">

          {/* <!-- Project 1 --> */}
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-1-square"></i>
              </div>
              <div className="service-content">
                <h3>Taskify Pro – Smart Task & Work Tracker</h3>
                <ul>
                  <li>Designed and developed a task and work management application using ASP.NET Core API and modern frontend technologies.</li>
                  <li>Implemented JWT-based authentication to secure APIs and user access.</li>
                  <li>Integrated Azure Blob Storage for secure cloud-based document storage and retrieval.</li>
                  <li>Followed RESTful API design principles to improve application structure and scalability.</li>
                  <li><strong>Technologies:</strong> HTML, CSS, JavaScript, jQuery, Bootstrap, ASP.NET Core API (.NET 8), SQL Server, JWT, Azure Blob Storage</li>
                </ul>
                <a href="https://github.com/rajkamalhatwar/Taskify_Pro_WebAPI" target="_blank" className="service-link">
                  <span>View Project</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Project Item --> */}

          {/* <!-- Project 2 --> */}
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-2-square"></i>
              </div>
              <div className="service-content">
                <h3>Personal Portfolio – Admin Panel & AI Photography Captions</h3>
                <ul>
                  <li>Designed and developed a dynamic personal portfolio application with an admin panel using ASP.NET Core API.</li>
                  <li>Implemented secure JWT authentication with role-based access for administrative operations.</li>
                  <li>Integrated AI-based photography caption generation with Azure Blob Storage for cloud media management.</li>
                  <li>Optimized API performance and ensured secure data handling across the application.</li>
                  <li><strong>Technologies:</strong> HTML, CSS, JavaScript, jQuery, Bootstrap, ASP.NET Core API (.NET 8), SQL Server, JWT, Azure Blob Storage</li>
                </ul>
                <a href="#" target="_blank" className="service-link">
                  <span>View Project</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Project Item --> */} 

        </div> 
      </div> 

    </section>
    </>
  )
}

export default Projects

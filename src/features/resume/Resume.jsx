import React from 'react'
import { useEffect,useRef,useState } from 'react'
import Skill from './componants/Skill'
import EducationItem from './componants/EducationItem'
import ExperianceItem from './componants/ExperianceItem'
import { useLoaderData } from "react-router-dom";

function Resume() {
  const skillsRef = useRef(null)
  const [skillVisible, setSkillVisible] = useState(false)
  const { skills, experiences, educations } = useLoaderData();
  console.log(skills);
  console.log(experiences);
  console.log(educations);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // const skills = [
  //   { title: 'Backend Development (C#, ASP.NET MVC, ASP.NET Core)', value: 90 },
  //   { title: 'Frontend Development (HTML, CSS, JavaScript, Bootstrap)', value: 85 },
  //   { title: 'React & jQuery (Basics)', value: 50 },
  //   { title: 'Database Management (SQL Server)', value: 85 },
  //   { title: 'API Development (REST APIs, AJAX)', value: 88 },
  //   { title: 'Programming Concepts (OOP, Problem Solving)', value: 90 },
  //   { title: 'Version Control & Cloud (Git, Azure Blob Storage)', value: 75 },
  //   { title: 'Core Java', value: 70 },
  //   { title: 'Collaboration & Teamwork', value: 85 }
  //   ];

  return (
    <>
          {/* <!-- Resume Section --> */}
    <section id="resume" className="resume section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row">
          <div className="col-lg-6">

            {/* <!-- Education Section --> */}
            <div className="resume-item" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>
              <div className="resume-content">
                {educations
                  .filter((edu) => edu.isActive)
                  .sort((a, b) => a.sequenceNo - b.sequenceNo)
                  .map((edu) => (
                    <EducationItem key={edu.id} education={edu} />
                  ))}
              </div>
              {/* <div className="resume-content">
                <article className="education-item">
                  <h4>Bachelor of Engineering</h4>
                  <p>Computer Science and Engineering - CGPA : 7.8(Overall)</p> 
                  <h5>2019 - 2023</h5>
                  <p className="institution"><em>KDK College of Engineering, Nagpur, Maharashtra</em></p>
                </article>

                <article className="education-item">
                  <h4>Higher Secondary Certificate (HSC)</h4>
                  <p>12th - Percentage : 69.54%</p> 
                  <h5>2018 - 2019</h5>
                  <p className="institution"><em>Janata Jr College, Mouda, Nagpur, Maharashtra</em></p>
                </article>

                <article className="education-item">
                  <h4>Secondary School Certificate (SSC)</h4>
                  <p>10th - Percentage : 76%</p> 
                  <h5>2016 - 2017</h5>
                  <p className="institution"><em>Janata Jr College, Mouda, Nagpur, Maharashtra</em></p> 
                </article>
              </div> */}
            </div>
            {/* <!-- End Education Section -->  */}

            {/* <!-- Professional Skills Section --> */}
            <div className="resume-item skills-animation" data-aos="fade-up">
              <h3 className="resume-title">Professional Skills</h3>

              <div ref={skillsRef} className="resume-content"> 
                {skills
                .sort((a, b) => a.sequenceNo - b.sequenceNo)
                .map((skill, index) => (
                    <Skill
                    key={index}
                    title={skill.skillName}
                    value={skill.outOf100}
                    visible={skillVisible}
                    />
                ))} 
              </div>
            </div>
            {/* <!-- End Professional Skills Section --> */}

          </div>

          <div className="col-lg-6"> 
            {/* <!-- Experience Section --> */}
              <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-content">
                  {experiences
                    .filter((exp) => exp.isActive)
                    .sort((a, b) => a.sequenceNo - b.sequenceNo)
                    .map((exp) => (
                      <ExperianceItem key={exp.id} experience={exp} />
                  ))}
                </div>

                {/* <div className="resume-content">

                  <article className="experience-item">
                    <h4>Junior Software Developer</h4>
                    <h5>Aug 2024 – Aug 2025</h5>
                    <p className="company"><em>MasterSoft ERP Solutions Pvt. Ltd.</em></p>
                    <ul>
                      <li>Enhanced and maintained ERP web applications using ASP.NET MVC and ASP.NET Core for educational institutions, ensuring scalability, reliability, and high performance.</li>
                      <li>Managed live client projects by gathering requirements, implementing customized solutions, and supporting business-specific workflows.</li>
                      <li>Optimized SQL Server queries and stored procedures, improving application performance and response time by approximately 30%.</li>
                      <li>Improved UI/UX using JavaScript, jQuery, Bootstrap, and AJAX, increasing usability and overall user engagement.</li>
                      <li>Collaborated with cross-functional teams to deliver features within defined timelines while maintaining code quality.</li>
                    </ul>
                  </article>

                  <article className="experience-item">
                    <h4>Software Developer Intern</h4>
                    <h5>Feb 2024 – Jul 2024</h5>
                    <p className="company"><em>MasterSoft ERP Solutions Pvt. Ltd.</em></p>
                    <ul>
                      <li>Assisted in developing and enhancing ERP modules using ASP.NET MVC and ASP.NET Core, contributing to 100% on-time delivery for live client projects.</li>
                      <li>Executed SQL queries and worked with stored procedures to support efficient data retrieval and reporting requirements.</li>
                      <li>Worked closely with senior developers to debug issues, optimize existing functionality, and improve application performance.</li>
                      <li>Gained hands-on experience working on live client projects by understanding real-world business requirements and workflows.</li>
                    </ul>
                  </article>

                </div> */}
              </div>
              {/* <!-- End Experience Section --> */}

          </div>
        </div>

      </div>

    </section>
    {/* <!-- /Resume Section --> */}
    </>
  )
}

export default Resume

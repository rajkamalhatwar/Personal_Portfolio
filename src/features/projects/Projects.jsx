import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProjectItem from './componant/ProjectItem';

function Projects() {
  const projects = useLoaderData();
  return (
    <>
    <section id="services" className="services section"> 
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2> 
      </div>
       

      <div className="container" data-aos="fade-up" data-aos-delay="100"> 
        <div className="row justify-content-center g-5">

          {projects
            ?.sort((a, b) => a.sequenceNo - b.sequenceNo)
            ?.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
              />
          ))}

        </div> 
      </div> 

    </section>
    </>
  )
}

export default Projects

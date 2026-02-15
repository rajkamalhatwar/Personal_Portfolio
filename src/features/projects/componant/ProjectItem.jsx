import React from "react";

function ProjectItem({ project, index }) {
  const {
    projectName,
    shortDescription,
    gitHubLink,
    liveLink,
    demoLink,
    techStack,
    features,
  } = project;

  return (
    <div className="col-md-12" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item">
        <div className="service-icon">
          <i className={`bi bi-${index + 1}-square`}></i>
        </div>

        <div className="service-content">
          <h3>{projectName}</h3>

          <p>{shortDescription}</p>

          <ul>
            {features?.map((item, i) => (
              <li key={i}>{item.feature}</li>
            ))}

            <li>
              <strong>Technologies:</strong> {techStack}
            </li>
          </ul>

          {gitHubLink && (
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link me-3"
            >
              <span>View on GitHub</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          )}
      
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link me-3"
            >
              <span>Live</span>
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <span>Demo</span>
              <i className="bi bi-play-circle"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

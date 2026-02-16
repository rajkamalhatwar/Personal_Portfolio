import React from 'react'
import { useState } from 'react' 
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom"; 
 
function CreativeWorks() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImg, setLightboxImg] = useState(null)
  const portfolioData = useLoaderData(); 

  const filters = [
    "All",
    ...new Set(portfolioData.map((item) => item.categoryName)),
  ];
 
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    576: 1
   };



  return (
    <>
    {/* LIGHTBOX */}
    {lightboxImg && (
    <div className="react-lightbox" onClick={() => setLightboxImg(null)}>
        <span className="lightbox-close">&times;</span>
        <img
        src={lightboxImg}
        alt="Preview"
        onClick={(e) => e.stopPropagation()}
        />
    </div>
    )}
      
    {/* <!-- Portfolio Section --> */}
    <section id="portfolio" className="portfolio section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>This portfolio showcases all my creative works, including photography, sketches, logo designs, and poster designs. Each project reflects my passion for creativity, design, and visual storytelling.</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">

        {/* FILTERS */}
        <ul className="portfolio-filters" data-aos="fade-up">
          {filters.map(filter => (
            <li
              key={filter}
              className={activeFilter === filter ? 'filter-active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>  
         <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            data-aos="fade-up"
            columnClassName="masonry-grid_column"
          >
            {portfolioData
              .filter(
                item =>
                  activeFilter === "All" ||
                  item.categoryName === activeFilter
              )
              .map(item => (
                <motion.div
                  key={item.id}
                  className="portfolio-item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="portfolio-card">
                    <div className="portfolio-img">
                      <img
                        src={item.imageURL}
                        className="img-fluid"
                        alt={item.title}
                        onClick={() => setLightboxImg(item.imageURL)}
                        style={{ cursor: "zoom-in" }}
                      />
                    </div>

                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>

                      {item.tags && (
                        <div className="portfolio-tags">
                          {item.tags.split(",").map((tag, i) => (
                            <span key={i}>{tag.trim()}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </Masonry>



      </div>
    </section>
 
    </>
  )
}

export default CreativeWorks

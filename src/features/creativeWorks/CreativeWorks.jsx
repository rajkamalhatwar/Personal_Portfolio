import React from 'react'
import { useState } from 'react' 
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
 
const portfolioData = [
  {
    id: 1,
    category: 'Sketches',
    title: 'The Chhatrapati Shivaji Maharaj Sketch',
    description: 'Chhatrapati Shivaji Maharaj known as Father of Indian Navy.',
    img: 'https://rajkamalblobstorage.blob.core.windows.net/portfolio/creative-works-images/20260120184304155_9837.jpg',
    tags: ['shivba', 'chhatrapati']
  },
  {
    id: 2,
    category: 'Sketches',
    title: 'The Rohit Sharma Sketch',
    description: 'Sketch of Rohit Sharma, former Indian cricket team captain.',
    img:'https://rajkamalblobstorage.blob.core.windows.net/portfolio/creative-works-images/20260206025535773_4500.png',
    tags: ['Cricket', 'ICT']
  },
  {
    id: 3,
    category: 'Photography',
    title: 'Where Time Meets the Sky',
    description: 'Ancient temple crown against drifting clouds.',
    img: 'https://rajkamalblobstorage.blob.core.windows.net/portfolio/creative-works-images/20260124204703411_7822.jpg',
    tags: ['temple']
  },
  {
    id: 4,
    category: 'Photography',
    title: 'Faith in Motion',
    description: 'Devotees moving through a historic gateway.',
    img: 'https://rajkamalblobstorage.blob.core.windows.net/portfolio/creative-works-images/20260124204403067_7935.jpg',
    tags: ['Faith', 'historic']
  },
  {
    id: 5,
    category: 'Photography',
    title: 'Faith in Motion',
    description: 'Devotees moving through a historic gateway.',
    img: 'https://rajkamalblobstorage.blob.core.windows.net/portfolio/creative-works-images/20260124204403067_7935.jpg',
    tags: ['Faith', 'historic']
  },
  {
    id: 6,
    category: 'Photography',
    title: 'Faith in Motion',
    description: 'Devotees moving through a historic gateway.',
    img: 'https://rajkamalblobstorage.blob.core.windows.net/portfolio/creative-works-images/20260124204403067_7935.jpg',
    tags: ['Faith', 'historic']
  },
]
function CreativeWorks() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImg, setLightboxImg] = useState(null)

  const filters = ['All', 'Sketches', 'Photography', 'Logo', 'PosterDesign']

//   const filteredItems =
//     activeFilter === 'All'
//       ? portfolioData
//       : portfolioData.filter(item => item.category === activeFilter)


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

        {/* <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        data-aos="fade-up"
        columnClassName="masonry-grid_column"
        > 
            {filteredItems.map(item => (
                <motion.div
                    key={item.id + activeFilter}   // 🔥 forces remount on filter change
                    className="portfolio-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    //transition={{ duration: 0.6, ease: "easeOut" }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                >

                <div className="portfolio-card">

                     IMAGE ITEM  
                    {item.img && (
                    <>
                        <div className="portfolio-img">
                        <img
                            src={item.img}
                            className="img-fluid"
                            alt={item.title}
                            onClick={() => setLightboxImg(item.img)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        </div>

                        <div className="portfolio-info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>

                        {item.tags && (
                            <div className="portfolio-tags">
                            {item.tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))}
                            </div>
                        )}
                        </div>
                    </>
                    )}  

                </div>
                </motion.div>
            ))} 
        </Masonry> */}

        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            data-aos="fade-up"
            columnClassName="masonry-grid_column"
            >
            {portfolioData.map(item => {
                const isVisible =
                activeFilter === "All" || item.category === activeFilter;

                return (
                <motion.div
                    key={item.id}
                    className="portfolio-item"
                    animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.95
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                    display: isVisible ? "block" : "none"
                    }}
                >
                    <div className="portfolio-card">
                    <div className="portfolio-img">
                        <img
                        src={item.img}
                        className="img-fluid"
                        alt={item.title}
                        onClick={() => setLightboxImg(item.img)}
                        style={{ cursor: "zoom-in" }}
                        />
                    </div>

                    <div className="portfolio-info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>

                        {item.tags && (
                        <div className="portfolio-tags">
                            {item.tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                            ))}
                        </div>
                        )}
                    </div>
                    </div>
                </motion.div>
                );
            })}
         </Masonry>


      </div>
    </section>
 
    </>
  )
}

export default CreativeWorks

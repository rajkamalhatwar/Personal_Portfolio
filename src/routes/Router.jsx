import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layoutes/MainLayout';
import Home from '../features/home/Home';
import About from '../features/about/About';
import Resume from '../features/resume/Resume';
import Projects from '../features/projects/Projects';
import CreativeWorks from '../features/creativeWorks/CreativeWorks';
import Contact from '../features/contact/Contact';
import { homeLoader } from '../features/home/HomeLoader';
import { resumeLoader } from '../features/resume/ResumeLoader';
import { projectLoader } from '../features/projects/ProjectLoader';
import { creativeWorksLoader } from '../features/creativeWorks/CreativeWorkLoader';

const router = createBrowserRouter([
    { 
        element: <MainLayout />,
        children: [
          { path: "/", 
            element: <Home />,
            loader : homeLoader,
            errorElement: <div>Something went wrong</div>
          },
          { path: "/About", 
            element: <About />,
            loader : homeLoader,
            errorElement: <div>Something went wrong</div>
          },
          { path: "/Resume", 
            element: <Resume />,
            loader : resumeLoader,
            errorElement: <div>Something went wrong</div>
          },
          { path: "/Projects", 
            element: <Projects />,
            loader : projectLoader,
            errorElement: <div>Something went wrong</div>
          },
          { path: "/CreativeWorks", 
            element: <CreativeWorks />,
            loader : creativeWorksLoader,
            errorElement: <div>Something went wrong</div>
          },
          { path: "/Contact", 
            element: <Contact /> ,
            loader : homeLoader,
            errorElement: <div>Something went wrong</div>
          } 
        ]
    }
]);

export default router

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layoutes/MainLayout';
import Home from '../features/home/Home';
import About from '../features/about/About';
import Resume from '../features/resume/Resume';
import Projects from '../features/projects/Projects';
import CreativeWorks from '../features/creativeWorks/CreativeWorks';
import Contact from '../features/contact/Contact';

const router = createBrowserRouter([
    { 
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/About", element: <About /> },
          { path: "/Resume", element: <Resume /> },
          { path: "/Projects", element: <Projects /> },
          { path: "/CreativeWorks", element: <CreativeWorks /> },
          { path: "/Contact", element: <Contact /> }
 
        ]
    }
]);

export default router

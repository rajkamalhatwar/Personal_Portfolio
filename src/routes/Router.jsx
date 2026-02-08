import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layoutes/MainLayout';
import Home from '../features/home/Home';
import About from '../features/about/About';

const router = createBrowserRouter([
    { 
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/About", element: <About /> }
 
        ]
    }
]);

export default router

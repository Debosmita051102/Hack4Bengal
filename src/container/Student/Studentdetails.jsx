import React from 'react'
import Nav from  './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Account from './Account/Account';
import Course from './Course/Course';
import Exam from './Exam/Exam';
import Pdf from './Pdf/Pdf';
import Video from './Video/Video';
import About from './About/About';
import Login from '../SingnUp/Login';
import Signup from '../SingnUp/Signup';
import Playlist from './Playlist/Playlist';
import TodE from './Todo/TodoWrapper';
import Live from './LiveVideo/Live';
import Room from './LiveVideo/Room';
import Chat from './Chat/Chat'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/video",
        element: <Video/>
      },
    // {
    //   index:<Home/>,
    //   element:<Home/>
    // },
    {
      path: "/about",
      element: <About />,
    },
    {
        path: "/notes",
        element: <Pdf/>,
      },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
        path: "view",
        element: <Playlist />,
    },
        // {  
        // path: "todo",  
        // element: <TodE />,
        // },
        {
            path: "/exam",
            element: <Exam/>,
        },
        {
          path: "/live",
          element: <Live />,
        },
        {
          path: "/room/:roomId",
          element: <Room/>,
        },
        {
          path: "/chat",
          element: <Chat/>,
        }

  ]);

const Studentdetails = () => {
  return (
    <div className='Student-details'>
    <div>
    <RouterProvider router={router} />
    </div>
      
    </div>
  )
}

export default Studentdetails;

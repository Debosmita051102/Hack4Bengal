import React from 'react'
import Home from './Home/Home';
import Footer from './Footer/Footer';
import UploadVideo from './VideoUpload/UploadVideo'
import UploadPdf from './NotesUpload/Uploadpdf'
import ViewVideo from './ViewVideo/ViewVideo'
import ViewPdf from './ViewPdf/Pdf'
import Live from './LiveVideo/Live'
import Room from './LiveVideo/Room'
import Navbar from './Navbar/Navbar';
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
        element: <UploadVideo/>
      },
    // {
    //   index:<Home/>,
    //   element:<Home/>
    // },
    {
      path: "/live",
      element: <Live />,
    },
    {
        path: "/uploadpdf",
        element: <UploadPdf/>,
      },
      {
        path: "/uplodvideo",
        element: <UploadVideo/>,
      },
      {
        path: "/viewvid",
        element: <ViewVideo/>,
      },
      {
        path: "/viewpdf",
        element: <ViewPdf/>,
      },
      {
        path: "/room/:roomId",
        element: <Room/>,
      }
  ]);



const Teacherdetails = () => {
  return (
    <div className='Teacher-details'>
    <div>
      <RouterProvider router={router} />

    </div>
    </div>
  )
}

export default Teacherdetails;

import logo from './logo.svg';
import './App.css';
import Home from './container/Student/Home/Home';
import Footer from './container/Student/Footer/Footer'
// import Login from './container/SingnUp/Login'
import Sing from './container/SingnUp/Signup'
import Account from './container/Student/Account/Account';
import UploadPdf from './container/Teacher/VideoUpload/UploadVideo';
import UploadVideo from './container/Teacher/VideoUpload/UploadVideo';
import Quiz from  './container/Student/Exam/Exam';
import Nav from './container/Student/Navbar/Navbar'
import ViewVideo from './container/Teacher/ViewVideo/ViewVideo'
import ViewPdf from './container/Teacher/ViewPdf/Pdf'
import * as ReactDOM from "react-dom/client";
import Doubt from './container/Student/Doubt/Doubt'
import About from './container/Student/About/About'
import Navbar from './container/Student/Navbar/Navbar';
import Live from './container/Teacher/LiveVideo/Live'
import Room from './container/Teacher/LiveVideo/Room'
import StudentDetails from './container/Student/Studentdetails'
import Login from './container/SingnUp/Login'
import Teacherdetails from './container/Teacher/Teacherdetails';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Live/>
//   },
//   // {
//   //   index:<Home/>,
//   //   element:<Home/>
//   // },
//   {
//     path: "/room/:roomId",
//     element: <Room />,
//   },
//   {
//     path: "contact",
//     // element: <Login />,
//   }
// ]);


function App() {
  return (
    <div className="App">
      <div >

       <StudentDetails />
      {/* <RouterProvider router={router} /> */}
      </div>
    </div>
  );
}

export default App;     

import React, { useState } from "react";
import './Signup.css';
import Nav from '../Student/Navbar/Navbar'

export default function SignUp() {
  const [fname, setFName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [data,setData] = useState([])
  const [secretKey, setSecretKey] = useState("");

  const addData = () =>{
    setData({
      fname:fname,
      lname: lname,
      email:email,
      phone:phone
    })
  }

  return (
    <div>
    <Nav />
    <div className="signup-box">
    <h1>Sign Up</h1>
    <h4>It's free and only takes a minute</h4>
    <form>
    <div className="Sing-in">
        </div>  
              
      <label>First Name</label>
      <input type="text"
              className="form-control"
              placeholder="Entryy"
              onChange={(e) => setFName(e.target.value)} />

      <label>Last Name</label>
      <input type="text"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(e) => setLname(e.target.value)} />
      <label>Mobile Number</label>
      <input type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              onChange={(e) => setPhone(e.target.value)} />
      <label>Email</label>
      <input type="email"
              className="form-control"
              placeholder="Enter email"   
              onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)} />
      <label>Confirm Password</label>
      <input type="password"
              className="form-control"
              placeholder="Confirm password"
              onChange={(e) => setPassword(e.target.value)}/>
      <input onClick={addData} type="button" value="Submit" />
    </form>
    <p>
      By clicking the Sign Up button, you agree to our <br />
      <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
    </p>
    <p className="para-2">
      Already have an account? <a href="login.html">Login here</a>
    </p>
  </div>
  </div>
  );
}

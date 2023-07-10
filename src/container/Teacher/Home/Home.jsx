import React from 'react';
import './Home.css';
import Logo from './illustration-intro.png';
import Nav from '../Navbar/Navbar';

function Home() {
  return (
    <div>
    <Nav />
    <div className="get-started">
      <img src={Logo} alt="illustration-intro" className="imageFlow" />

      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni</h2>

      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni nobis ea omnis minus tempore natus dicta accusantium est dolore, adipisci sunt temporibus beatae obcaecati.</p>

      <button className='Home_button'>Get Started</button>
    </div>
    </div>
  );
}

export default Home;


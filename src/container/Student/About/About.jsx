import React, { useState } from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import img1 from './images/pic1.jpg';
import img2 from './images/pic2.jpg';
import img3 from './images/pic3.jpg';
import img4 from './images/pic4.jpg';
import img5 from './images/pic5.jpg';
import img6 from './images/pic6.jpg';

const Gallery = () => {
  const [isFullImgOpen, setFullImgOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const openFullImg = (src) => {
    setFullImgOpen(true);
    setSelectedImg(src);
  };

  const closeFullImg = () => {
    setFullImgOpen(false);
  };

  return (
    <div>
    <Navbar />
    <div className='bd'>
      <div className="gallery" >
        <a >Gallery</a>
      </div>
      <header className={`full-img ${isFullImgOpen ? 'open' : ''}`} id="full-imgbox">
        <img src={selectedImg} id="full-img" alt="" />
        <span onClick={closeFullImg}>X</span>
      </header>
      <div className="img-gallery">
        <img src={img1} alt="" onClick={() => openFullImg(img1)} />
        <img src={img2} alt="" onClick={() => openFullImg(img2)} />
        <img src={img3} alt="" onClick={() => openFullImg(img3)} />
        <img src={img4} alt="" onClick={() => openFullImg(img4)} />
        <img src={img5} alt="" onClick={() => openFullImg(img5)} />
        <img src={img6} alt="" onClick={() => openFullImg(img6)} />
        {/* Add more images here */}
      </div>
      <div className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur minus qui officia omnis perferendis, in rem
        vero recusandae dignissimos repellat, hic dolore ullam? Vel, voluptates. Dolor voluptas autem consequatur
        accusantium.
      </div>
      <div className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur minus qui officia omnis perferendis, in rem
        vero recusandae dignissimos repellat, hic dolore ullam? Vel, voluptates. Dolor voluptas autem consequatur
        accusantium.
      </div>
    </div>
    </div>
  );
};

export default Gallery;
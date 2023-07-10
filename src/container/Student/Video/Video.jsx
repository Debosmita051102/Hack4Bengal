import './Video.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Playlist from '../Playlist/Playlist';

const App = () => {
  const [cards] = useState([
    {
      title: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        title: '',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    
  ]);

  const navigate = useNavigate();

  const goToPlaylist = () => {
    navigate('/view');
  };

  return (
    <div>
    <Navbar/>
      <section>
        <div className="video_container">
          <h1 className="video_heading">Responsive Cards</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <div className="card-image" height="40px">
                  {/* Replace 'sampleImageUrls[i]' with the actual image URL for each card */}
                  {/* <img src={sampleImageUrls[i]} alt={`Image ${i + 1}`} /> */}
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <div className="button-container">
                    <button className="delete-btn" onClick={goToPlaylist}>
                      view
                    </button>
                    {/* <button className="delete-btn">
                      <AiOutlineEdit />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default App;

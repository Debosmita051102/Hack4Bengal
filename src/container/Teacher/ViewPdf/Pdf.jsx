// import logo from './logo.svg';
// import './App.css';
import './Pdf.css';
import { useState } from 'react';
import { AiOutlineDelete ,AiOutlineEdit} from 'react-icons/ai';

// import { FaUser } from 'react-icons/fa';




function App() {
  const [cards] = useState([
    {
      title: '',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quibusdam veritatis, quis voluptates est quas dicta temporibus obcaecati repellendus labore, pariatur, nulla distinctio earum reprehenderit esse? Quae voluptates cupiditate eveniet.',
    },
    {
      title: '',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quibusdam veritatis, quis voluptates est quas dicta temporibus obcaecati repellendus labore, pariatur, nulla distinctio earum reprehenderit esse? Quae voluptates cupiditate eveniet.',
    },
    {
      title: '',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quibusdam veritatis, quis voluptates est quas dicta temporibus obcaecati repellendus labore, pariatur, nulla distinctio earum reprehenderit esse? Quae voluptates cupiditate eveniet.',
    },
    {
      title: '',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quibusdam veritatis, quis voluptates est quas dicta temporibus obcaecati repellendus labore, pariatur, nulla distinctio earum reprehenderit esse? Quae voluptates cupiditate eveniet.',
    },
    {
      title: '',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quibusdam veritatis, quis voluptates est quas dicta temporibus obcaecati repellendus labore, pariatur, nulla distinctio earum reprehenderit esse? Quae voluptates cupiditate eveniet.',
    },
    {
      title: '',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quibusdam veritatis, quis voluptates est quas dicta temporibus obcaecati repellendus labore, pariatur, nulla distinctio earum reprehenderit esse? Quae voluptates cupiditate eveniet.',
    },
    // Add other cards here...
  ]);
  return (
    <div>
      <section>
        <div className="pdf_container">
          <h1 className='pdf_heading'>All Pdf is Here</h1>
          <div className="pdf_cards">
            {cards.map((card, i) => (
              <div key={i} className="pdf_card">
                <div className="card-image" height="40px">
                  {/* Replace 'sampleImageUrls[i]' with the actual image URL for each card */}
                  {/* <img src={sampleImageUrls[i]} alt={`Image ${i + 1}`} /> */}
                </div>
                <div className="pdf-content" >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <div className="button-container " >
                    <button className="delete-btn">
                      <AiOutlineDelete />
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
}

export default App;
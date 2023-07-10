import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Live.css';

function Live() {
  const [roomId, setRoomID] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="live-container">
      <h2 className="live-title">Join a Live Room</h2>
      <div className="input-container">
        <input
          type="text"
          className="room-input"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomID(e.target.value)}
        />
        <button className="join-button" onClick={handleJoin}>
          Join
        </button>
      </div>
    </div>
  );
}

export default Live;

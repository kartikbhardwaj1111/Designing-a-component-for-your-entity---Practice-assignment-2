import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Productcard from './components/productcard.jsx';

function App() {
  const cards = Array.from({ length: 10 });
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Ensures cards wrap into rows
    gap: '20px', // Spacing between each card
    padding: '20px', // Padding around the container
    justifyContent: 'space-between', // Ensures even distribution of cards in rows
  };

  return (
    <div style={containerStyle}>
      {cards.map((_, index) => (
        <Productcard key={index} />
      ))}
    </div>
  );
}

export default App;

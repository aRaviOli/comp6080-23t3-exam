import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import RandomOperatorsGame from './RandomOperatorsGame'; // Create this component
// import ConnectGame from './ConnectGame'; // Create this component
// import MemoryGame from './MemoryGame'; // Create this component

function App() {
  const [gamesRemaining, setGamesRemaining] = useState(5);

  useEffect(() => {
      fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/remain.json')
          .then(response => response.json())
          .then(data => {
              if (data.score !== undefined) {
                  setGamesRemaining(Math.max(0, 5 - data.score));
              }
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard gamesRemaining={gamesRemaining} />} />
          <Route path="/game/math" element={<RandomOperatorsGame />} />
          {/* <Route path="/game/connect" component={ConnectGame} />
          <Route path="/game/memory" component={MemoryGame} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
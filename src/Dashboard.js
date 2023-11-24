// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard({ initialGameData }) {
    const [gamesRemaining, setGamesRemaining] = useState(5);
    const [gamesWon, setGamesWon] = useState(0);

    useEffect(() => {
        if (initialGameData && initialGameData.score !== undefined) {
            setGamesWon(initialGameData.score);
        }
    }, [initialGameData]);

    const handleReset = () => {
        setGamesRemaining(5);
        setGamesWon(0);
    };

    return (
        <div className="dashboard">
            <div className="box">{gamesRemaining}</div>
            <div className="box">{gamesWon}</div>
            <div className="box">{gamesRemaining > 0 ? 'Keep going' : 'Great job'}</div>
            <div className="box">
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Dashboard;

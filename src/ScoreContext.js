import React, { createContext, useState, useEffect } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(null);
    const [gamesWon, setGamesWon] = useState(0);

    useEffect(() => {
        fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/remain.json')
            .then(response => response.json())
            .then(data => {
                if (data.score !== undefined) {
                    setGamesWon(data.score);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const incrementGamesWon = () => {
        setGamesWon(prev => prev + 1);
    };

    const resetScore = () => {
        setScore(null);
        setGamesWon(0);
    };

    return (
        <ScoreContext.Provider value={{ score, gamesWon, incrementGamesWon, resetScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

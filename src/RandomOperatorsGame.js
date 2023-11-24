import React, { useState } from 'react';
import './RandomOperatorsGame.css';

function RandomOperatorsGame() {
    const [firstNumber, setFirstNumber] = useState(generateRandomNumber());
    const [secondNumber, setSecondNumber] = useState(generateRandomNumber());
    const [operator, setOperator] = useState(generateRandomOperator());
    const [userInput, setUserInput] = useState('');

    function generateRandomNumber() {
        return Math.floor(Math.random() * 50) + 1;
    }

    function generateRandomOperator() {
        const operators = ['+', '-', '*', '/', '%'];
        return operators[Math.floor(Math.random() * operators.length)];
    }

    function calculateResult() {
        switch (operator) {
            case '+': return firstNumber + secondNumber;
            case '-': return firstNumber - secondNumber;
            case '*': return firstNumber * secondNumber;
            case '/': return firstNumber / secondNumber;
            case '%': return firstNumber % secondNumber;
            default: return 0;
        }
    }

    function handleKeyUp() {
        const result = parseFloat(userInput).toFixed(1);
        if (result === calculateResult().toFixed(1)) {
            alert('Congratulations');
            resetGame();
        }
    }

    function resetGame() {
        setFirstNumber(generateRandomNumber());
        setSecondNumber(generateRandomNumber());
        setOperator(generateRandomOperator());
        setUserInput('');
    }

    return (
        <div className="game-container">
            <div className="number-box">{firstNumber}</div>
            <div className="operator-box">{operator}</div>
            <div className="number-box">{secondNumber}</div>
            <div className="equals-box">=</div>
            <input
                className="input-box"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyUp={handleKeyUp}
                style={{ width: '50px' }}
            />
            <button onClick={resetGame}>Reset</button>
        </div>
    );
}

export default RandomOperatorsGame;

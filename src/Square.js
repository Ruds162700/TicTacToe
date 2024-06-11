import React from 'react';
import "./Square.css";

const Square = ({ number, user, setUser, squares, setSquares, winner }) => {
    const handleClick = () => {
        if (winner) return; // Prevent further moves if there is a winner
        if (squares[number] === null && user === "user1") {
            const newSquares = [...squares];
            newSquares[number] = "x";
            setSquares(newSquares);
            setUser("user2");
        } else if (squares[number] === null && user === "user2") {
            const newSquares = [...squares];
            newSquares[number] = "o";
            setSquares(newSquares);
            setUser("user1");
        }
    };

    return (
        <button className='square' onClick={handleClick}>
            {squares[number]}
        </button>
    )
}

export default Square;

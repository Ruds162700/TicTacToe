import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
    const [user, setUser] = useState("user1");
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState("");

    const reset = () => {
        setSquares(Array(9).fill(null));
        setUser("user1");
        setWinner("");
    };

    useEffect(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return;
            }
        }

        if (squares.every(square => square !== null) && winner === "") {
            setWinner("draw");
        }
    }, [squares, winner]);

    useEffect(() => {
        if (winner) {
            setTimeout(reset, 3000); // Automatically reset the game after 3 seconds
        }
    }, [winner]);

    return (
        <div className='bord'>
            {winner ? (
                <h1>{winner === "draw" ? "It's a draw!" : `${winner} wins!`}</h1>
            ) : null}
            <div className="board-raw">
                <Square number={0} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
                <Square number={1} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
                <Square number={2} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
            </div>
            <div className="board-raw">
                <Square number={3} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
                <Square number={4} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
                <Square number={5} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
            </div>
            <div className="board-raw">
                <Square number={6} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
                <Square number={7} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
                <Square number={8} user={user} setUser={setUser} squares={squares} setSquares={setSquares} winner={winner} />
            </div>
        </div>
    );
}

export default App;

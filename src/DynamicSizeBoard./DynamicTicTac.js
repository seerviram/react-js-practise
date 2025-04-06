import React, { useState } from "react";
import "./Tictac-style.css"

const DynamicTicTacToe = ({ size }) => {
  const totalCells = size * size;
  const [board, setBoard] = useState(Array(totalCells).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board, size)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board, size);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  const resetGame = () => {
    setBoard(Array(totalCells).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <h2>{size} × {size} Tic-Tac-Toe</h2>
      <div className="status">{status}</div>
      <div className="board" style={{ gridTemplateColumns: `repeat(${size}, 60px)` }}>
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

// 🔹 Function to check for a winner dynamically based on board size
const calculateWinner = (board, size) => {
  let lines = [];

  // Rows
  for (let r = 0; r < size; r++) {
    lines.push([...Array(size)].map((_, c) => r * size + c));
  }

  // Columns
  for (let c = 0; c < size; c++) {
    lines.push([...Array(size)].map((_, r) => r * size + c));
  }

  // Diagonal (Top-left to Bottom-right)
  lines.push([...Array(size)].map((_, i) => i * (size + 1)));

  // Diagonal (Top-right to Bottom-left)
  lines.push([...Array(size)].map((_, i) => (i + 1) * (size - 1)));

  for (let line of lines) {
    const [first, ...rest] = line.map((index) => board[index]);
    if (first && rest.every((cell) => cell === first)) {
      return first;
    }
  }

  return null;
};

export default DynamicTicTacToe;

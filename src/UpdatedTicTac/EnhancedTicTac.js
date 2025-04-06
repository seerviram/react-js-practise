import React, { useEffect } from 'react'
import "./Tictac.css"
// export default function EnhancedTicTacComponent() {
//     const n = 3;
//    const winCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

//     const [isWinner, setIsWinner] = React.useState("")
//     const [isGameOver, setIsGameOver] = React.useState(false)
//     const [currentTurn, setNextTurn] = React.useState('X')
//     const [boardState, setBooardState ] = React.useState(()=>Array.from({length:n*n}).fill("") )

//     const updateBoard = (index)=> {
//       setBooardState(prev=> {
//         if(prev[index]!=='' || isGameOver){
//           return prev;
//         }
//         let newCopy = [...prev]
//         newCopy[index] = currentTurn;
//         return newCopy;
//       })
//     }

//   const checkwinner = ()=> {
//    for(let item of winCombination){
//       let [a,b,c] = item;
//         if(boardState[a-1] && boardState[a-1] === boardState[b-1] && boardState[b-1] === boardState[c-1]){
//           return true;
//         }
//       }
//   return false;
//     }

//     const isDraw = () => {
//     return boardState.every(ele=> ele!=="");
//     }

//     useEffect(()=> {
//       if(!isGameOver){
         
//         if(checkwinner()){
//           setIsWinner(currentTurn);
//           setIsGameOver(true)
//         } else if(isDraw()){
//          setIsGameOver(true)
//         }
//         setNextTurn(prev=> {
//           console.log(prev)
//           let op= prev === 'X'? 'O': 'X';
//           return op;
//       })
//       }

//     }, [boardState])

//     const resetHandler = () => {
//       setIsGameOver(false)
//       setBooardState(prev=> prev.fill(""))
//       setIsWinner('')
//       setNextTurn('X')
//     }

//   return (
//     <div className='parent'>
//      <div className='boardContainer' >
//         {[...Array(9).keys()].map((_, index)=> (
//             <div
//             key={index} 
//             className='boardDiv'
//             onClick={()=> updateBoard(index)}
//             >
//               {boardState[index]}
//                </div>
//         ))}
//      </div>
//      <button onClick={resetHandler}> Reset</button>
//      {isWinner && <div> {`Winner is ${isWinner}`} </div>}
//      {isGameOver && !isWinner && <div>Math Draw</div>}
//     </div>
//   )
// }

const winCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
const checkwinner = (boardState)=> {
  for(let item of winCombination){
     let [a,b,c] = item;
       if(boardState[a-1] && boardState[a-1] === boardState[b-1] && boardState[b-1] === boardState[c-1]){
         return boardState[a-1];
       }
     }
 return null;
   }

export default function EnhancedTicTacComponent() {
  const n = 3;

  const [isXNext, setIsXNext] = React.useState(true)
  const [boardState, setBooardState ] = React.useState(()=>Array.from({length:n*n}).fill(null) )

  const updateBoard = (index)=> {
    if(boardState[index] || checkwinner(boardState)){
      return;
    }

    let newCopy = boardState.slice();
    newCopy[index] = isXNext? "X": 'O'
    setBooardState(newCopy)
    setIsXNext(!isXNext)
  }

  const winner = checkwinner(boardState) 
  const status = winner ? `winner is ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`


  const resetHandler = () => {
    setBooardState(prev=> prev.fill(null))
    setIsXNext(true)
  }

return (
  <div className='parent'>
    <div> status: {status}</div>
   <div className='boardContainer' >
      {[...Array(9).keys()].map((_, index)=> (
          <div
          key={index} 
          className='boardDiv'
          onClick={()=> updateBoard(index)}
          >
            {boardState[index]}
             </div>
      ))}
   </div>
   <button onClick={resetHandler}> Reset</button>
  </div>
)
}



/**
 * 
 * import React, { useState } from "react";

const TicTacToe = ({ size }) => {
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

export default TicTacToe;

 */

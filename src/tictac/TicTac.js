import React from 'react'
import "./style.css"

function TicTac() {
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let init = 'X';
    let isGameOver = false;
    let boardGame= Array.from({length:9}, ()=> "");

    const checkWinner = (text)=> {
        let winner  = false;
        for(let i=0;i<win.length;i++){
           let winEle = win[i];
            if(boardGame[winEle[0]] === text && boardGame[winEle[1]] === text && boardGame[winEle[2]] === text){
                winner = true;
                break;
            }
        }
        return winner;
    }
    const isDraw = ()=> {
        return boardGame.filter(ele=> !ele).length === 0
    }

    const placeText = (e)=> {
     const id = e.target.dataset.id;
     if(isGameOver || boardGame[id] ){
        return;
     }
     const ele = document.querySelector(`div[data-id="${id}"]`)
     ele.textContent = init;
     boardGame[id] = init;
     if(checkWinner(init)){
        document.querySelector(".Winner").textContent = `Winner ${init}`
        isGameOver = true
        return;
     } 
     if(isDraw()){
       document.querySelector(".Draw").textContent = `Draw`
       isGameOver = true;
     }
      init =  init==='X'? 'O':'X'
    }


    const startGame = ()=> {
        init = 'X';
    }
    const resetGame = ()=> {
        isGameOver=false;
        boardGame.fill("", 0, 9);
        document.querySelectorAll('div.box').forEach((divele)=> divele.textContent = '')
        document.querySelector(".Draw").textContent = null
          document.querySelector(".Winner").textContent = null
        startGame();
    };

  return (
    <>
    <div className='container' onClick={placeText}>
       {Array.from({length: 9}).map((arr, index)=> (<div className='box' data-id={index}></div>))}
    </div>
    <div>
        <button onClick={startGame}>Start Game</button>
        <button onClick={resetGame}>Reset Game</button>
    </div>
    <div className='Winner'></div>
    <div className='Draw'></div>
    </>
  )
}

export default TicTac

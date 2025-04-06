import React, { useEffect, useRef } from 'react'
import "./game.css";

const unitPos = 25;
function NokiaGame() {
    const canvasref = useRef(null)

    const GetFoodPos = (max) => {
        return Math.round((Math.random()*max)/unitPos)*unitPos    
    }
    
    const [foodPos, setFoodPos] = React.useState({
        x: GetFoodPos(475),
        y: GetFoodPos(475)
    })

    const DIRECTIONS = {
        ArrowUp: { x: 0, y: -25 },
        ArrowDown: { x: 0, y: 25 },
        ArrowLeft: { x: -25, y: 0 },
        ArrowRight: { x: 25, y: 0 },
      };
      
    const [isGameOver, setIsGameOver] = React.useState(false);
    const [direction, setDirection] = React.useState(DIRECTIONS.ArrowRight);
    const [snakePos, setSnakePos] = React.useState([
        {
        x: unitPos*4,
        y:0
      },
      {
        x: unitPos*3,
        y:0
      },
      {
        x: unitPos*2,
        y:0
      },
      {
        x: unitPos,
        y:0
      },
      {
        x: 0,
        y:0
      },
])

    const handleDirection = (e) => {
        if(DIRECTIONS[e.key]){
        setDirection(DIRECTIONS[e.key])
        }

    }

    useEffect(()=> {
    window.addEventListener('keydown', handleDirection)
    },[])

    function moveSnakcs (){
        const val = snakePos[0];
        const head = {
          x: val.x+ direction.x,
          y: val.y + direction.y
        }
        
        if(((head.x<0 || head.x>=500) || (head.y<0 || head.y>=500)) || (snakePos.some(ele=> ele.x === head.x && ele.y === head.y))){
            setIsGameOver(true);
            return;
        }

        let clonedPos = [...snakePos]
        clonedPos.unshift(head);

        if(head.x === foodPos.x && head.y === foodPos.y){
         setFoodPos((prev)=> ({
            ...prev,
            x: GetFoodPos(475),
            y: GetFoodPos(475)
         }))
        } else{
            clonedPos.pop();
        }
        setSnakePos(clonedPos);
    }

    useEffect(()=> {
     const id = setTimeout(() => {
        moveSnakcs();
     }, 100);
     return ()=> {
        clearTimeout(id)
     }
    },[snakePos])


    useEffect(()=> {
        
        const ctx = canvasref.current?.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 500, 500)


        ctx.fillStyle = 'red';
        ctx.fillRect(foodPos.x, foodPos.y, unitPos, unitPos)

       
      snakePos.forEach((snack)=> {
        ctx.fillStyle = 'green';
        ctx.fillRect(snack.x, snack.y, unitPos, unitPos)
      })
    }, [foodPos, snakePos])


// useEffect(()=> {
//     if(Object.keys(foodPos).length){

// }
// }, [foodPos])

// useEffect(()=> {
//     if(Object.keys(foodPos).length){
//     const ctx = canvasref.current?.getContext('2d');
//     snakePos.forEach((ele)=> {
//         ctx.fillStyle = 'green';
//         ctx.fillRect(ele.x, ele.y, unitPos, unitPos)
//     })
// }
// }, [snakePos])


//  const drawFood = () => {
//     const ctx = canvasref.current?.getContext('2d');
//     ctx.fillStyle = 'red';
//     ctx.fillRect(foodPos.x, foodPos.y, unitPos, unitPos)
//  }
//     const startgame = ()=> {
//         drawFood()
//     };

  return (
    <div className='containerG'>
     <canvas className='canvas' width="500" height={"500"} ref= {canvasref}></canvas>
       <button onClick={()=>{}}>Start Game</button>
    </div>
  )
}

export default NokiaGame

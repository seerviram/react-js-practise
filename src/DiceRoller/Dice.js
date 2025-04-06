import React from 'react'
import "./style.css"

const config = {
    1: [5],
    2:[3,7],
    3: [3,5,7],
    4: [1,3,7,9],
    5: [1,3,5,7,9],
    6:[1,3,4,6,7,9]
}

function Dice() {
    const [dice, setDice] = React.useState(1)
    const [show, setShow] = React.useState(null)

    const dicechangeHandler = (e)=> {
        setDice(Number(e.target.value))
    }

    const rollHandler = () =>setShow((Math.random()*6))
    console.log('show', show)

  return (
    <div>
       <input type='text' value={dice} onChange={dicechangeHandler}/>
       <button onClick={rollHandler}>Roll</button>
      
       {show && [...Array(dice).keys()].map((d,id)=> {
        const val = Math.ceil(Math.random()*6);
        return (<>
            <div> Dice {val} </div>
            <div className='diceContainer'>
            {[...Array(9).keys()].map((diceele, index)=> <div className={`diceEle ${config[val].includes(index+1) && 'active'}`}></div>)}
            </div>
            </>
            )
       }
       )}
    </div>
  )
}

export default Dice

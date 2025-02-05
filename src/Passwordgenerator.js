import React from 'react'

const combination = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function Passwordgenerator() {
const [pass,setPass] = React.useState("")
const generate = () => {
    let op = ''
    for(let i=0;i<10;i++){
        const index = Math.floor((Math.random()* combination.length));
     op+= combination[index]
    }
    setPass(op);
}
  return (
    <div>
        <div>passowrd: {pass}</div>
      <button onClick={generate}>Generate Password</button>
    </div>
  )
}

export default Passwordgenerator

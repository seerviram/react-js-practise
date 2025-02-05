import * as React from 'react';
import './App.css';



/**
 * 
 * @returns start , stop, reset
 * seconds minutes
 */

function App() {

  const [min, setMin] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  let intervalId  = React.useRef(null);
  const [interval, setIntervalState] = React.useState(null)

const startHandler = ()=> {
  let interval = setInterval(()=> {
    setSec((sec)=> {
      if(sec ===59){
        setMin((minval)=> minval+1 )
        return 0;
      } else{
        return sec+1;
      }
    })
  }, 500)
  setIntervalState(interval)
}

const stopHandler = ()=> {
  clearInterval(interval)
}

const resetHandler = ()=> {
clearInterval(interval)
setSec(0)
setMin(0)
}
React.useEffect(()=> {
  setInterval(()=> CountDown(), 1000);
},[])

return (

  <>
  <h1 >current time:</h1>
  <div>
     current time: {min}: {sec}
  </div>
  <div>
  <button onClick ={startHandler}>Start</button>
  <button onClick ={stopHandler}>Stop</button>
  <button onClick ={resetHandler}>Reset</button>
  </div>

  {/* <CountDown/> */}
  </>
)

}

function CountDown(){

  let date1 ="2025/02/03"
  let date2 = new Date()
  let millseconds  = new Date(date1) - new Date(date2)
  let day = Math.floor(millseconds/(1000/60/60/24))
  let hours = Math.floor(millseconds/(1000/60/60))%24
  let minutes = Math.floor(millseconds/1000/60)%60
  let seconds = Math.floor(millseconds/1000)%60




  console.log(`HI :   ${day}day: ${hours}hour : ${minutes} min: ${seconds} sec`)
  // return(
  //   <div>
  //     <span>{day}: </span>
  //     <span>{hours}:</span>
  //     <span>{minutes}: </span>
  //     <span>{seconds}</span>
  //   </div>
  // )
}





export default App;

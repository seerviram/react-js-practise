import React from 'react'

function StopWatchResetResum() {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false)
    const intervalRef = React.useRef(null)

    const startHandler = () => {
        setIsRunning(true)
    }

    const stopHandler = () => {
    setIsRunning(false);
    }

    const resetHandler = () => {
        setIsRunning(false)
        setTime(0)
    }

    React.useEffect(()=> {
        if(isRunning){
        intervalRef.current = setInterval(()=> {
                    setTime((time)=> time+1)
        }, 10)
        } else {
            clearInterval(intervalRef.current)
        }
        // return ()=> {
        //     clearInterval(intervalRef.current)
        // }

    },[isRunning])
  return (
    <div>
      <div>Time :{time.toFixed(3)}</div>
    {  !isRunning ?  
        <button onClick={startHandler}>Start</button> :
      <button onClick={stopHandler}>Stop</button>
      }
      <button onClick={resetHandler}>Reset</button>
      <button onClick={startHandler}>Resume</button>
    </div>
  )
}

export default StopWatchResetResum

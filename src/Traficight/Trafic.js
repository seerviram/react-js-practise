import React from 'react'
import "./style.css";

export default function Trafic() {
    const lights = ['green', 'yellow', 'red']
    const dur = [3000,500, 4000]
    const [currentLight, setCurrentLight] = React.useState(0)

   React.useEffect(()=> {
    const time = setTimeout(()=> {
        setCurrentLight((cur)=> (cur+1)% lights.length)
    },dur[currentLight])
    return ()=> {
        clearTimeout(time)
    }
   },[currentLight])


  return (
    <div className='container'>
       {/* <div className={`red ${red ? "active":""}`}></div>
       <div className={`yellow ${yellow ? "active":""}`}></div>
       <div className={`green ${green ? "active":""}`}></div> */}
       {lights.map((light, index)=> (<div className={`${light} ${currentLight===index ? "active":""}`}></div>))}
    </div>
  )
}

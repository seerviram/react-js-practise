import React from 'react'
import "./traficStyle.css"

const durtaion = [3000, 500, 4000]
const lights = ['green', 'yellow', 'red']
let id = 0;
export default function Traffic() {
    const [currentLight, setCurrentLight] = React.useState('green');

    React.useEffect(()=> {
      const timer = setTimeout(()=> {
        id++;
        id = (id%durtaion.length)
        setCurrentLight(()=>lights[id])
       }, durtaion[id])

       return ()=> {
        clearTimeout(timer);
       }

    }, [currentLight])

  return (
    <div className='trafficContainer'>
      <div className={`light ${currentLight === 'green' && 'green'}`}></div>
      <div className={`light ${currentLight === 'yellow' && 'yellow'}`}></div>
      <div className={`light ${currentLight === 'red' && 'red'}`}></div>
    </div>
  )
}

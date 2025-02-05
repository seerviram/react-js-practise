import React from 'react'
import "./style.css"

function StarRating() {
    const [rateIndex, setRateIndex] = React.useState(-1);

    const startHandler = (e)=> {
   const  divClickedIndex = e.target.dataset.id;
   setRateIndex(divClickedIndex)
    }

  return (
    <div  onClick={startHandler} className='starContainer'>
      {[...Array(5)].map((ele, index)=> (<div className={`startbox ${index<=rateIndex? "active":""}`} data-id={index}></div>))}
    </div>
  )
}

export default StarRating

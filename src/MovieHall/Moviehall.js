import React from 'react'
import "./Movie.css"

export default function Moviehall() {
  return (
    <div className='movieHall'>
       
       {
        [...Array(9).keys()].map((row, index)=> (
            <div className='rowContainer'>
                <div className='firstpart'>
                {[...Array(5).keys()].map((firstpart, i)=> (
                    <div className='seat'>{`${String.fromCharCode(65+index)} ${i}`} </div>
                ))}
                </div>
                <div className='secondpart'>
                {[...Array(5).keys()].map((secondpart, p)=> (
                    <div className='seat'>{`${String.fromCharCode(65+index)} ${p+5}`} </div>
                ))}
                </div>
            </div>
        ))
       }
    </div>
  )
}

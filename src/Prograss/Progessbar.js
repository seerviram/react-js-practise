import React from 'react'
import "./style.css"

function Progessbar() {
    const clickHandler = ()=> {
        const getbar = document.querySelector(".progress");
        let width = 1;
        let id ;
        id = setInterval(move, 10);
        function move(){
         
            if(width>=100){
              clearInterval(id)
            } else {
                width++;
                getbar.style.width=`${width}%`
            }
        }
    }
    return (
        <div>
          <button onClick={clickHandler}>Start</button>
          <div className="outerContainer">
            <div className="progress"></div>
          </div>
        </div>
      );


    function startProgress() {
        const progressBar = document.getElementById("progressBar");
        progressBar.style.width = "100%";
      }

    return (<>
     <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
      </div>
      <button onClick={startProgress}>Start Progress</button></>)
}

export default Progessbar

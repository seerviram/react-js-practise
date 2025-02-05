import { useEffect, useState } from "react";

export default function Progress({ index }) {
  const [progressIndex, setProgressIndex] = useState(0);
  useEffect(()=> {
    let width = 1;
    let id = setInterval(()=> {
        const prgoessElement = document.querySelectorAll(".innerBar");
        if(width>=100){
            clearInterval(id)
        } else{
        width++;
        }
        prgoessElement[index].style.width=`${width}%`
        setProgressIndex(width);
    }, 20)
    return ()=> {
        clearInterval(id) 
    }

  },[])


  return (
    <div className="outerContainer">
      <div className="innerBar">Progress {progressIndex}%</div>
    </div>
  );
}

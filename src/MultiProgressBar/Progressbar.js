// import { useEffect, useState } from "react";

// export default function Progress({ index }) {
//   const [progressIndex, setProgressIndex] = useState(0);
//   useEffect(()=> {
//     let width = 1;
//     let id = setInterval(()=> {
//         const prgoessElement = document.querySelectorAll(".innerBar");
//         if(width>=100){
//             clearInterval(id)
//         } else{
//         width++;
//         }
//         prgoessElement[index].style.width=`${width}%`
//         setProgressIndex(width);
//     }, 20)
//     return ()=> {
//         clearInterval(id) 
//     }

//   },[])


//   return (
//     <div className="outerContainer">
//       <div className="innerBar">Progress {progressIndex}%</div>
//     </div>
//   );
// }

import "./styles.css";
import * as React from "react";

const Progress = ({ id }) => {

  React.useEffect(() => {
    let width = 1;
    let intervalId = setInterval(() => {
      width++;
      if (width > 100) {
        clearInterval(intervalId);
      }
      const ele = document.querySelectorAll(".innerbox");
      ele[id].style.width = `${width}%`;
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [id]);

  return (
    <div className="graybox">
      <div className="innerbox">
      </div>
    </div>
  );
};
export default function NewProgrees() {
  const [progressBars, setProgressBars] = React.useState([]);

  const addProgressBar = () => {
    setProgressBars((prevBars) => [
      ...prevBars,
      { id: Date.now(), progress: 0 },
    ]);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((prevBars) =>
        prevBars.map((bar) =>
          bar.progress < 100 ? { ...bar, progress: bar.progress + 5 } : bar
        )
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={addProgressBar}>Add</button>
      {
        progressBars.map((ele, id) => (
          <CustomProgress key={id} value={ele.progress} />
        ))}
    </div>
  );
}

function CustomProgress({value}){
    return (
    <div className="graybox">
      <div className="innerbox" style={{width: `${value}%`}}>
      </div>
    </div>
  );
}


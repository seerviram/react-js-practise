import "./styles.css";
import Progress from "./Progressbar";
import React from "react";

export default function MultiProgress() {
  const [barIndex, setBarIndex] = React.useState(0);

  const addProgressBar = () => {
    setBarIndex((prev) => prev + 1);
  };
  return (
    <div className="barcontainer">
      {barIndex > 0 &&
        Array(barIndex)
          .fill("z")
          .map((bar, index) => <Progress key={index} index={index} />)}
      <button onClick={addProgressBar}>Submit</button>
    </div>
  );
}

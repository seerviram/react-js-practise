import * as React from "react";
export default function StopWatch() {
  const [time, setTime] = React.useState(0);
  const ref = React.useRef();

  const startHandler = () => {
    ref.current = setInterval(() => {
      setTime((time) => time + 100);
    }, [5]);
  };

  const resetHandler = () => {
    clearInterval(ref.current);
    setTime(0);
  };
  const hours = Math.floor(time / 1000 / 60 / 60);
  const minutes = Math.floor(time / 1000 / 60) % 60;
  const seconds = Math.floor(time / 1000) % 60;
  const millseconds = Math.floor(time % 1000);
  let updatdHour = hours.toString().padStart(2, "0");
  let updatdMin = minutes.toString().padStart(2, "0");
  let updatdSeconds = seconds.toString().padStart(2, "0");
  let ms = millseconds.toString().padStart(2, "0");

  return (
    <div>
      <p>
        {updatdHour}: {updatdMin}: {updatdSeconds}.{ms}
      </p>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

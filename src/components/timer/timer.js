import React, { useState, useEffect } from "react";
import "./style.css";
const Timer = () => {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    let timer = null;
    if (startTimer) {
      interval = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);

      setTimer(interval);
    } else {
      clearInterval(timer);
    }
  }, [startTimer]);
  return (
    <>
      <div className="box">
        <button className="add">Add Counter</button>
        <button className="times">{time}</button>
      </div>
      <div className="box2">
        <button className="btns" onClick={() => setStartTimer(true)}>
          {startTimer === true ? "Stop Timer" : "Start Timer"}
        </button>
        <button className="time">{time}</button>
      </div>
    </>
  );
};

export default Timer;

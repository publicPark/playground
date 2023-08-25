import { useState } from "react";
import "./Clock.css";
function Clock() {
  const segHour = 12;
  const segMin= 60;
  const getData = () => {
    let day = new Date();
    let hh = day.getHours() * 360/segHour;
    let mm = day.getMinutes() * 360/segMin;
    let ss = day.getSeconds() * 360/segMin;
    return {
      style: {
        hh: {
          transform: `rotateZ(${(hh)+(mm/12)}deg)`,
        },
        mm: {
          transform: `rotateZ(${mm}deg)`,
        },
        ss: {
          transform: `rotateZ(${ss}deg)`,
        }
      },
      day: day
    }
  }

  const data = getData();
  const [styles, setStyles] = useState(data.style);
  const [day, setDay] = useState(data.day);

  setInterval(()=> {
    const data = getData();
    setStyles(data.style)
    setDay(data.day)
    return;
  },1000);
  
  return (
    <>
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr" style={styles.hh}></div>
        </div>
        <div className="min">
          <div className="mn" id="mn" style={styles.mm}></div>
        </div>
        <div className="sec">
          <div className="sc" id="sc" style={styles.ss}></div>
        </div>
      </div>
      <div>{day.getHours()}</div>
      <div>{day.getMinutes()}</div>
      <div>{day.getSeconds()}</div>
    </>
  );
}

export default Clock;

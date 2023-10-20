import { useEffect, useState } from "react";
import "./Clock.scss";
function Clock() {
  const segHour = 12;
  const segMin = 60;
  const getData = () => {
    let day = new Date();
    let hh = (day.getHours() * 360) / segHour;
    let mm = (day.getMinutes() * 360) / segMin;
    let ss = (day.getSeconds() * 360) / segMin;
    return {
      style: {
        hh: {
          transform: `rotateZ(${hh + mm / 12}deg)`,
        },
        mm: {
          transform: `rotateZ(${mm}deg)`,
        },
        ss: {
          transform: `rotateZ(${ss}deg)`,
        },
      },
      day: day,
    };
  };

  const data = getData();
  const [styles, setStyles] = useState(data.style);
  const [day, setDay] = useState(data.day);

  setInterval(() => {
    const data = getData();
    setStyles(data.style);
    setDay(data.day);
    return;
  }, 1000);

  useEffect(() => {
    const makeCircle = () => {
      const N = 12;
      const r = 80;
      for (let i = 0; i < N; i++) {
        const node = document.createElement("div");
        node.setAttribute("class", "indic");
        const ceta = (360 / N) * i;
        const cetaToRadian = (ceta * Math.PI) / 180;
        const x = Math.cos(cetaToRadian) * r;
        const y = Math.sin(cetaToRadian) * r;
        console.log("makeCircle", ceta, x, y);
        node.setAttribute(
          "style",
          `transform:translateX(${x}px) translateY(${y}px)`
        );
        document.getElementById("clock").appendChild(node);
      }
    };
    makeCircle();
    return;
  }, []);

  return (
    <>
      <div>
        <div>
          {day.getHours()} {day.getMinutes()} {day.getSeconds()}
        </div>
      </div>
      <div className="clock" id="clock">
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
    </>
  );
}

export default Clock;

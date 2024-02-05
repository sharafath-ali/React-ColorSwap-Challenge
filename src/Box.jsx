import React from "react";
import { useState, useEffect } from "react";
function Box() {
  const [isStarted, setIsStarted] = useState(false);
  const [color1, Setcolor1] = useState("black");
  const [color2, Setcolor2] = useState("black");

  useEffect(() => {
    if (isStarted) {
      setInterval(function () {
        if (color1 === "red" && color2 === "green") {
          Setcolor1("green");
          Setcolor2("red");
        } else {
          Setcolor1("red");
          Setcolor2("green");
        }
        console.log("djgduydy");
      }, 2000);
    }
  }, [isStarted]);

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "2px solid",
          margin: "20px",
          backgroundColor: `${color1}`,
        }}
      >
        box 1
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "2px solid",
          margin: "20px",
          backgroundColor: `${color2}`,
        }}
      >
        box 2
      </div>
      <button
        onClick={() => {
          setIsStarted(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setIsStarted(false);
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default Box;

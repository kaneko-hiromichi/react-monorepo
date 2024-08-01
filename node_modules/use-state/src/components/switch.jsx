import React, { useState } from "react";

const Switch = () => {
  const [sw, setsw] = useState(false);
  const [color, setcolor] = useState("grey");
  const [onOff, setonOff] = useState("on");
  const light = () => {
    setsw(!sw);
    if (sw) {
      setcolor("grey");
      setonOff("off");
    } else {
      setcolor("yellow");
      setonOff("on");
    }
  };
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      <h2>電気のスイッチ</h2>
      <button
        onClick={() => {
          light();
        }}
      >
        {onOff}
      </button>
    </div>
  );
};

export default Switch;

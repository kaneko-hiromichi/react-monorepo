import React, { useState } from "react";

const Add = () => {
  const [num, setnum] = useState(0);


  return (
    <div>
      <div className="lesson1">
        <h2>1加算するだけのやつ</h2>
        <p>{num}</p>
        <input
          type="submit"
          value="+1"
          onClick={() => {
            setnum(num + 1);
          }}
        />
        <input
          type="button"
          value="+1"
          onClick={() => {
            setnum(num + 1);
          }}
        />
        <button
          onClick={() => {
            setnum(num + 1);
          }}
        >
          +1
        </button>
      </div>
      
    </div>
  );
};

export default Add;

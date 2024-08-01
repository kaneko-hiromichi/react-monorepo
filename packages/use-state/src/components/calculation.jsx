import React, { useState } from "react";

const Calculation = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [result, setresult] = useState(0);
  const add = () => {
    setresult(Number(num1) + Number(num2));
  };
  const subtraction = () => {
    setresult(Number(num1) - Number(num2));
  };
  const multiplication = () => {
    setresult(Number(num1) * Number(num2));
  };
  const division = () => {
    setresult(Number(num1) / Number(num2));
  };
  const reset = () => {
    setnum1(0);
    setnum2(0);
    setresult(0);
  };
  const exchange = () => {
    setnum1(num2);
    setnum2(num1);
  };

  return (
    <div>
      <div className="lesson2">
        <h2>計算、リセット</h2>
        <p>{result}</p>
        <input
          type="number"
          value={num1}
          onChange={(e) => {
            setnum1(e.target.value);
          }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => {
            setnum2(e.target.value);
          }}
        />
        <br />
        <input
          type="submit"
          value="+"
          onClick={() => {
            add();
          }}
        />
        <input
          type="submit"
          value="-"
          onClick={() => {
            subtraction();
          }}
        />
        <input
          type="submit"
          value="×"
          onClick={() => {
            multiplication();
          }}
        />
        <input
          type="submit"
          value="÷"
          onClick={() => {
            division();
          }}
        />
        <input
          type="submit"
          value="リセット"
          onClick={() => {
            reset();
          }}
        />
        <input
          type="submit"
          value="⇔"
          onClick={() => {
            exchange();
          }}
        />
      </div>
    </div>
  );
};

export default Calculation;

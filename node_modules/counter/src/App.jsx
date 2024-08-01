// App.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countUp, countDown ,reset} from "./slice";

function App() {
  const [num, setNum] = useState(1);
  const count = useSelector((state) => state.counter.value); // 状態を取得
  const dispatch = useDispatch(); // アクションをディスパッチ
  const inputNum = (e) => {
    setNum(Number(e.target.value));
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <input type="number" onChange={inputNum} />
      <button onClick={() => dispatch(countUp(num))}>+</button>
      <button onClick={() => dispatch(countDown(num))}>-</button>
      <button onClick={() => dispatch(reset())}>リセット</button>
    </div>
  );
}

export default App;

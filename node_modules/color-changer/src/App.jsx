// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBlue, changeRed , changeWhite} from "./slice";

function App() {
  const change = useSelector((state) => state.color.color); // 状態を取得
  const dispatch = useDispatch(); // アクションをディスパッチ

  return (
    <div
      className="back-ground"
      style={{
        backgroundColor: change,
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      <p>現在の色：{change}</p>
      <ul>
        <li>
          <button onClick={() => dispatch(changeBlue())}>changeBlue</button>
        </li>
        <li>
          <button onClick={() => dispatch(changeRed())}>changeRed</button>
        </li>
        <li>
          <button onClick={() => dispatch(changeWhite())}>changeWhite</button>
        </li>
      </ul>
    </div>
  );
}

export default App;

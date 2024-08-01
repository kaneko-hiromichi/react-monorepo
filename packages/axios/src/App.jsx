import React, { useState } from "react";
import UserData from "./components/UserData";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h1>ユーザーデータ取得</h1>
      <input
        type="number"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />

      <UserData userId={userId} />
    </div>
  );
}

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {



  const [users, setUsers] = useState([]); // ユーザーのリストを保持する状態

  useEffect(() => {
    // コンポーネントのマウント時にAPIリクエストを実行
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data); // 取得したデータを状態にセット
      })
      .catch(error => {
        console.error('データの取得に失敗しました:', error);
      });
  }, []); // 空の依存配列で、初回マウント時にのみ実行

  return (
    <div>
      <h1>ユーザーリスト</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;

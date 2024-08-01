import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserData({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // userIdが変更されるたびに実行される
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('データの取得に失敗しました:', error);
        setUserData(null); // エラー時はデータをクリア
      });
  }, [userId]); // userIdが変更されるたびにこのuseEffectが再度実行される

  return (
    <div>
      <h1>ユーザー情報</h1>
      {userData ? (
        <div>
          <p>名前: {userData.name}</p>
          <p>ユーザー名: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>データを読み込んでいます...</p>
      )}
    </div>
  );
}

export default UserData;

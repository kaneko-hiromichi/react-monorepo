// UserListComponent.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './userSlice';

function UserListComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.users.userList); // ユーザーリストを取得
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser({ name, email })); // 新しいユーザーを追加
    setName(''); // 入力フィールドをクリア
    setEmail('');
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UserListComponent;

// src/App.js

import React, { useState } from 'react';
import Calculation from './components/calculation';
import Add from './components/add';
import UserName from './components/user-name';
import List from './components/list';
import Task from './components/task';
import Switch from './components/switch';
import Axios from './components/axios';


function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showCalculation, setShowCalculation] = useState(false);
  const [showUserName, setShowUserName] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [showAxios, setShowAxios] = useState(false);

  return (
    <div>
      <button onClick={()=>{window.location.reload()}}>リロード</button>
      <h1>useStateの練習</h1>
      <button onClick={() => setShowAdd(!showAdd)}>Add</button>
      <button onClick={() => setShowCalculation(!showCalculation)}>Calculation</button>
      <button onClick={() => setShowUserName(!showUserName)}>UserName</button>
      <button onClick={() => setShowList(!showList)}>List</button>
      <button onClick={() => setShowTask(!showTask)}>Task</button>
      <button onClick={() => setShowSwitch(!showSwitch)}>Switch</button>
      <button onClick={() => setShowAxios(!showAxios)}>Axios</button>

      
      {showAdd && <Add />}
      
      {showCalculation && <Calculation />}
      
      {showUserName && <UserName />}
      
      {showList && <List />}
      
      {showTask && <Task />}

      {showSwitch && <Switch/>}

      {showAxios && <Axios/>}
    </div>
  );
}

export default App;
// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset,setStatusBusy,setStatusIdle,multiplication } from './counterSlice';


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset 0</button>
      <button onClick={() => dispatch(setStatusBusy())}>setStatusBusy</button>
      <button onClick={() => dispatch(setStatusIdle())}>setStatusIdle</button>
      <button onClick={() => dispatch(multiplication())}>×2</button>
    </div>
  );
}

export default App;

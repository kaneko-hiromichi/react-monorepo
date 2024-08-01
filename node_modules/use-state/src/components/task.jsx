import { useState } from "react";

const Task = () => {
  const [tasklist, settasklist] = useState([]);
  const [task, settask] = useState("");

  return (
    <div>
      <p>{task}</p>
      <h2>タスクを追加するだけのやつ</h2>

      <input
        type="text"
        placeholder="何か入力してね"
        value={task}
        onChange={(e) => {
          settask(e.target.value);
        }}
      />
      <input
        type="submit"
        onClick={() => {
          settasklist([...tasklist, task]);
          settask("");
        }}
      />

      <ol>
        {tasklist.map((task) => {
          return <li>{task}</li>;
        })}
      </ol>
    </div>
  );
};
export default Task;

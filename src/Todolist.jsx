import { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState("");

  function handleChangeInput(e) {
    setNewTasks(e.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTask) => [...prevTask, newTask]);
      setNewTasks("");
    }
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleMoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function handleMoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="Enter Task Here"
        value={newTask}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddTask} className="btn-add">
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text-task">{task}</span>
            <button className="btn-del" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
            <button
              className="btn-move"
              onClick={() => handleMoveTaskUp(index)}
            >
              ⬆️
            </button>
            <button
              className="btn-move"
              onClick={() => handleMoveTaskDown(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;

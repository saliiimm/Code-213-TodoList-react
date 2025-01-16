/* eslint-disable react/prop-types */
import { useState } from 'react';
import './AddTask.css';
const AddTask = ({ tasks, setTasks }) => {
  const [newtask, setNewTask] = useState('');
  const handleNewTaskChange = (event) => {
    console.log(event.target.value);
    setNewTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newtask != '') {
      setTasks([...tasks, newtask]);
      setNewTask('');
    } else {
      alert('Please enter a task');
    }
  };
  return (
    <div className="inputDiv">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newtask}
        onChange={handleNewTaskChange}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddTask;

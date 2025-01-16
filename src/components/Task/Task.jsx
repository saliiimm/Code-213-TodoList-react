/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Task.css';
const Task = ({ index, text, tasks, setTasks }) => {
  const [isModifiying, setIsModifiying] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const handleEditInput = (event) => {
    setEditValue(event.target.value);
  };

  const handleSave = () => {
    let copyOfTasks = [...tasks];
    copyOfTasks[index] = editValue;
    setTasks(copyOfTasks);
    setIsModifiying(false);
  };
  const handleDelete = (text) => {
    let copyOfTasks = [...tasks];
    copyOfTasks = copyOfTasks.filter((task) => task != text);
    setTasks(copyOfTasks);
  };
  return (
    <li>
      {isModifiying == true ? (
        <>
          <input type="text" value={editValue} onChange={handleEditInput} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="edit" onClick={() => handleSave()}>
              Save
            </button>
            <button className="delete" onClick={() => setIsModifiying(false)}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{text}</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="edit" onClick={() => setIsModifiying(true)}>
              edit
            </button>
            <button className="delete" onClick={() => handleDelete(text)}>
              delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;

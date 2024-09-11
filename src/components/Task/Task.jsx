/* eslint-disable react/prop-types */
import './Task.css';
const Task = ({ index, text }) => {
  return <li key={index}>{text}</li>;
};

export default Task;

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Task from '../Task/Task';
import './TaskList.css';
const TaskList = ({ list }) => {
  return (
    <ul className="myItems">
      {list.map((text, index) => (
        <Task index={index} text={text} />
      ))}
    </ul>
  );
};

export default TaskList;

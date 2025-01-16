/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Task from '../Task/Task';
import './TaskList.css';
const TaskList = ({ list, tasks, setTasks }) => {
  return (
    <ul className="myItems">
      {list.map((task, index) => (
        <Task
          key={index}
          index={index}
          text={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </ul>
  );
};

export default TaskList;

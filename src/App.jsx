import { useState } from 'react';
import './App.css';
import MyTitle from './components/MyTitle/MyTitle';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    'Prepare the kitchen',
    'Look for some cool stuff',
    'Code some ReactJS',
    'Drink a cup of coffee',
    'Going for the win',
  ]);
  return (
    <div className="mainapp">
      <MyTitle />
      <TaskList list={tasks} tasks={tasks} setTasks={setTasks} />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

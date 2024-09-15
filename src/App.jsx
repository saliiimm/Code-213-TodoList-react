import './App.css';
import MyTitle from './components/MyTitle/MyTitle';
import TaskList from './components/TaskList/TaskList';
function App() {
  let tasks = [
    'Prepare the kitchen',
    'Look for some cool stuff',
    'Code some ReactJS',
    'Drink a cup of coffee',
    'Going for the win',
  ];
  return (
    <div className="mainapp">
      <MyTitle titre={'ToDolist Project'} />
      <TaskList list={tasks} />
    </div>
  );
}

export default App;

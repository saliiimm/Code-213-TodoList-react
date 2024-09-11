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
    <>
      <MyTitle titre={'ToDolist Project'} />
      <TaskList list={tasks} />
    </>
  );
}

export default App;

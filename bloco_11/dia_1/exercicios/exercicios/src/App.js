// import logo from './logo.svg';
import './App.css';
// import TasksList from './exercicio';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const Tasks = ['estudar', 'dormir', 'jantar', 'comer'];
  return Task(Tasks.map((task) =>(
    <li>{task}</li>))
  ) 
  // return Tasks.map((task) => (
  //   <li>{task}</li>
  // ))

  // return <TasksList />;
  
}

export default App;

import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
     <Header/>
     <TaskList/>
     <CreateTask/>
    </div>
  );
}

export default App;

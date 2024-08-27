import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import TaskList from './components/TaskList';


function App() {
  const [tasklist, setTasklist] = useState([]);
  return (
    <div className="App">
     <Header/>
     <CreateTask tasklist = {tasklist} setTasklist = {setTasklist}/>
     <TaskList tasklist = {tasklist} setTasklist = {setTasklist}/>
    </div>
  );
}

export default App;

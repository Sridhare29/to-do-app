import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import TaskList from './components/TaskList';


function App() {
  const [tasklist, setTasklist] = useState( JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  return (
    <div className="App">
     <Header/>
     <CreateTask tasklist = {tasklist} setTasklist = {setTasklist} task = {task} setTask = {setTask}/>
     <TaskList tasklist = {tasklist} setTasklist = {setTasklist} task = {task} setTask = {setTask}/>
    </div>
  );
}

export default App;

// Effect hook let's us do things at a certain point in a component's life. Ex: before it renders, it will fetch data to render.
import React, {useState, useEffect} from 'react';
import Task from './Task.js';
import './App.css';

const API = 'http://taskmaster-env.v2hyii2zyf.us-west-2.elasticbeanstalk.com/taskmaster/tasks';

function App() {

  // creates a variable tasks, sets it equal to default value in the array. SetTasks, the function to run.
  const [tasks, setTasks] = useState([]);

  function _getTasks(){
    fetch(API)
      .then(data => data.json())
      .then(fetchedTasks => setTasks(fetchedTasks));
  }

  // fn that takes in a fn to run and an optional parameter of when to run. This will only fire once bc of the empty array.
  useEffect( _getTasks, []);

  return (
    <div className="App">
      <h1>Tasks</h1>
      <Task tasks={tasks}/>
    </div>
  );
}

export default App;

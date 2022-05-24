import './App.css';
import axios from "axios"
import Tasks from './components/tasks';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/tasks";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setTasks(items);
      }
    }, []);

    return () => (mounted = false);
  })
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

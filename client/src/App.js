import logo from './logo.png';
import './App.css';
import Task from './components/Task';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  const [taskName, setTaskName] = useState('');
  const [taskDone, setTaskDone] = useState(0);
  const [taskslist, setTaskList] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState([]);

  useEffect(() => {
    try {
      Axios.get('http://localhost:3001/api/get').then((response) => {
        setTaskList(response.data)
        setCheckboxStates(response.data.map((task) => task.taskdone));
      })
    }catch (error) {
      console.error(error);
    }
    
  }, [taskslist])

  const submitTask = () => {
    Axios.post('http://localhost:3001/api/insert', {
      taskName: taskName,
      taskDone: taskDone
    })
      .then((response) => {
        const newTask = {
          id: response.data.insertId,
          taskname: taskName,
          taskdone: taskDone
        };
        setTaskList([...taskslist, newTask]); // Adiciona a nova tarefa à lista existente
      })
      .catch(() => {
        console.log("Failed to insert.");
      })
  }

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  }

  const deleteTask = (taskId) => {
    Axios.delete(`http://localhost:3001/api/delete/${taskId}`).then((response) => {
      console.log(response)
    })
  }
   

  return (
    <div className='h-screen bg-gradient-to-r from-fuchsia-600 to-purple-600 md:px-16 lg:px-36 xl:px-52 2xl:px-96'>

      <img src={logo} className="w-48 p-4 md:w-60" alt="" />
      <div className='bg-white rounded-md m-4 p-4 '>
        <div className='grid grid-cols-4'>
          <input onChange={(e) => { setTaskName(e.target.value) }} className="border-2 rounded-md p-2 col-span-3" placeholder='Task to be done...' type="text" name="newTask" />
          <button onClick={submitTask} className='bg-purple-700 ml-4 p-2 rounded-md text-white font-semibold'>Add</button>
        </div>
      </div>

      <div className='bg-white rounded-md m-4 p-4 '>

        {taskslist.map((task, index) => (
          <>
            <Task
              key={index}
              taskName={task.taskname}
              taskDone={task.taskdone}
              onChange={() => handleCheckboxChange(index)}
              onClick={() => deleteTask(task.taskid)}
            />

          </>
        ))}

      </div>

    </div>
  );
}

export default App;

import logo from './logo.png';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function App() {


  const [checkboxStates, setCheckboxStates] = useState([false, false]);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  }


  return (
    <div className='h-screen bg-gradient-to-r from-fuchsia-600 to-purple-600 md:px-16 lg:px-36 xl:px-52 2xl:px-96'>

      <img src={logo} className="w-48 p-4 md:w-60" alt="" />
      <div className='bg-white rounded-md m-4 p-4 '>
        <div className='grid grid-cols-4'>
          <input className="border-2 rounded-md p-2 col-span-3" placeholder='Task to be done...' type="text" name="newTask"/>
          <button className='bg-purple-700 ml-4 p-2 rounded-md text-white font-semibold'>Add</button>
        </div>
      </div>

      <div className='bg-white rounded-md m-4 p-4 '>

        <Task taskName="Prepare the monthly report" taskDone={checkboxStates[0]} onChange={() => handleCheckboxChange(0)}/>
        <Task taskName="Lunch with Zack" taskDone={checkboxStates[1]} onChange={() => handleCheckboxChange(1)}/>

        

      </div>

    </div>
  );
}

export default App;

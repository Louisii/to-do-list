import logo from './logo.png';
import './App.css';
import { FaTrashAlt } from 'react-icons/fa';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-fuchsia-600 to-purple-600 md:px-16 lg:px-36 xl:px-52 2xl:px-96'>


      <img src={logo} className="w-48 p-4 md:w-60" alt="" />

      <div className='bg-white rounded-md m-4 p-4 '>
        <div className='grid grid-cols-4'>
          <input className="border-2 rounded-md p-2 col-span-3" placeholder='Task to be done...' type="text" />
          <button className='bg-purple-700 ml-4 p-2 rounded-md text-white font-semibold'>Add</button>
        </div>
      </div>

      <div className='bg-white rounded-md m-4 p-4 '>

        <div className='grid grid-cols-7 mb-4 md:grid-cols-12'>
          <input className='w-5' type="checkbox" />
          <p className='col-span-5 md:col-span-10'>Prepare the monthly report</p>
          <div className='text-end'>
            <button className='bg-purple-700 p-2 rounded-md text-white font-semibold w-8'><FaTrashAlt /></button>
          </div>
        </div>

        <div className='grid grid-cols-7 mb-4 md:grid-cols-12'>
          <input className='w-5' type="checkbox" />
          <p className='col-span-5 md:col-span-10'>Lunch with Zack</p>
          <div className='text-end'>
            <button className='bg-purple-700 p-2 rounded-md text-white font-semibold w-8'><FaTrashAlt /></button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;

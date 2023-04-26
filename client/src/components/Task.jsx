import { FaTrashAlt } from 'react-icons/fa';

const Task = (props) => {
   
    return(
        <div className='grid grid-cols-7 mb-4 md:grid-cols-12 border-b-2 pb-2'>
          <input className='w-5' type="checkbox"  checked={props.taskDone} onChange={props.onChange}/>
          <p className={`col-span-5 md:col-span-10 ${props.taskDone? 'line-through': ''}`} >{props.taskName} </p>
          <div className='text-end'>
            <button className='bg-purple-700 p-2 rounded-md text-white font-semibold w-8' onClick={props.onClick}><FaTrashAlt /></button>
          </div>
        </div>
    )
}

export default Task
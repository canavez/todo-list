import './AddTask.css'

import { useState } from 'react';

const AddTask = ({ handleAddTask }) => {

  const [inputData, setInputData] = useState("")

  const handleChange = (e) => {
    setInputData(e.target.value)
  }

  const handleClickAdd = () => {
    handleAddTask(inputData)
    setInputData("")
  }

  return (
    <>
        <form className="addtask-container" onSubmit={handleClickAdd}>
            <div className="input-container">
                <input type="text" placeholder="Add a task" onChange={handleChange} value={inputData}/>
            </div>
            <div className="btn-container">
                <button>ADD</button>
            </div>
        </form>
    </>
  )
}

export default AddTask
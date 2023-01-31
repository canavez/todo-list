import "./Task.css"

import { AiOutlineCloseCircle } from 'react-icons/ai'

const Task = ({ list, setList, handleComplete, handleDelete }) => {

  return (
    <div className={`${!list.completed ? "task-container" : "task-completed"}`}>
        <div className="task-title" onClick={() => handleComplete(list.id)}>
            {list.title}
        </div>
        <div className="task-icon" onClick={() => handleDelete(list.id)}>
            <AiOutlineCloseCircle />
        </div>
    </div>
  )
}

export default Task
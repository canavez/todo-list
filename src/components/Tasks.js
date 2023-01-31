import "./Tasks.css"

import Task from "./Task"

const Tasks = ({ key, list, setList, handleComplete, handleDelete }) => {
  return (
    <div className="tasks-container">
        {
            list.map((list) => 
                <Task
                  key={list.id}
                  list={list}
                  setList={setList}
                  handleComplete={handleComplete}
                  handleDelete={handleDelete}
                />
            )
        }
    </div>
  )
}

export default Tasks
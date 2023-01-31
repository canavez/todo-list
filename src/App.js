import './App.css';

import { useEffect, useState } from 'react';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';

const DEFAULT_LIST = [
  {
    id: 1,
    title: "Exemple of task number 1 (incomplete)",
    completed: false
  },
  {
    id: 2,
    title: "Exemple of task number 2 (completed)",
    completed: true
  },
  {
    id: 3,
    title: "Click on the task name to complete it",
    completed: false
  },
  {
    id: 4,
    title: "Click the close button to delete a task",
    completed: false
  },
]

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || DEFAULT_LIST)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleComplete = (listId) => {
    const newList = list.map((list) => {
        if (list.id === listId) return {...list, completed: !list.completed}
        return list
    })
    setList(newList)
  }

  const handleDelete = (listId) => {
    const newList = list.filter((list) => list.id !== listId)
    setList(newList)
  }

  const handleAddTask = (taskTitle) => {
    const newList = [...list, {
      id: (list.length + 1),
      title: taskTitle,
      completed: false
    }]
    setList(newList)
  }

  return (
    <>
      <div className="main-container">
        <Header />

        <AddTask
          handleAddTask={handleAddTask}
        />

        <Tasks
          key={list.id}
          list={list}
          setList={setList}
          handleComplete={handleComplete}
          handleDelete={handleDelete}/>
      </div>
    </>
  );
}

export default App;

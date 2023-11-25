import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'


const TasksContext = createContext()

function TasksProvider({ children }) {
  const [searchValue, setSearchValue] = useState('')
  const {
    items: tasks,
    saveItems: setTasks,
    error,
    loading
  } = useLocalStorage('TASK_V1', [])
  const [openModal, setOpenModal] = useState(false)

  const taskCompleted = tasks.filter(task => task.completed).length
  const taskTotal = tasks.length


  const setCompleted = (e) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex(
      (task) => task.id === e.target.getAttribute('id')
    )
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    setTasks(newTasks)
  }

  const searchTask = tasks.filter((task) => (
    task
      .text.toLowerCase()
      .replace(/\s/g, "")
      .includes(searchValue.toLowerCase().replace(/\s/g, ""))
  ))

  const deleteTask = (e) => {

    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex(
      (task) => task.id === e.target.parentNode.getAttribute('id')
    )
    newTasks.splice(taskIndex, 1)
    setTasks(newTasks)
  }
  const addTask = (text) => {
    const newTasks = [...tasks]
    const task = {
      id: text,
      text: text,
      completed: false
    }
    newTasks.push(task)
    setTasks(newTasks)
  }


  return (
    <TasksContext.Provider value={{
      tasks,
      error,
      loading,
      addTask,
      searchValue,
      setSearchValue,
      searchTask,
      setCompleted,
      deleteTask,
      taskCompleted,
      taskTotal,
      openModal,
      setOpenModal
    }}>
      {children}
    </TasksContext.Provider>
  )
}

export { TasksProvider, TasksContext }
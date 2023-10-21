'client'
import { useState } from 'react'
import './App.css'
import { Search } from '../Search'
import { List } from '../List'
import { Task } from '../Task'
import { CreateItem } from '../CreateItem'
import { CounterItems } from '../CounterItems'
import { useLocalStorage } from './services/useLocalStorage'


function App() {
  const [searchValue, setSearchValue] = useState('')
  const [tasks, setTasks] = useLocalStorage('TASK_V1', [])

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
  const addTask = (e) => {
    console.log('New task');
    const newTasks = [...tasks]
    const input = e.target.parentNode.querySelector('input')
    const task = {
      id: input.value,
      text: input.value,
      completed: false
    }
    newTasks.push(task)
    setTasks(newTasks)

    input.value = ''
  }

  return (
    <>
      <section className='flex flex-col p-4 gap-2 items-center border-zinc-400 border-2 rounded-md max-w-xs m-auto'>
        <h2 className='text-lg'>Create New Task</h2>
        <input type="text" placeholder="what's next?" className='block p-2 rounded-md outline-none focus:outline-violet-700' />
        <CreateItem addTask={addTask} />
      </section>

      <main className='flex flex-col gap-8 items-center'>
        <header className='p-8'>
          <h1 className='font-bold'>Your Tasks</h1>
        </header>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <List>
          {
            searchTask.map((item) => (
              <Task
                text={item.text}
                key={item.id}
                id={item.id}
                completed={item.completed}
                setCompleted={setCompleted}
                deleteTask={deleteTask} />
            ))
          }
        </List>

      </main>
      <CounterItems completed={taskCompleted} total={taskTotal} />
    </>
  )
}

export default App

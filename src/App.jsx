'client'
import { useState } from 'react'
import './App.css'
import { Search } from './Search'
import { List } from './List'
import { Task } from './Task'
import { CreateItem } from './CreateItem'
import { CounterItems } from './CounterItems'




function App() {
  /* 
  const itemsData = [
    { id: 0, text: 'Make a coffee', completed: false },
    { id: 1, text: 'Create a Crud app', completed: false },
    { id: 2, text: 'Study Algorithms', completed: false },
    { id: 3, text: 'Create social Links', completed: true },
    { id: 4, text: 'Complete de MySQL project', completed: false },
    { id: 5, text: 'Create a zig design', completed: true },
  ]
  const stringTask = JSON.stringify(itemsData)
  localStorage.removeItem('TASK_V1') 
  localStorage.setItem('TASK_V1', stringTask)
  */
  const initialTasks = () => {
    const tasksStorage = JSON.parse(window.localStorage.getItem('TASK_V1')) || [];
    window.localStorage.setItem('TASK_V1', JSON.stringify(tasksStorage));
    return tasksStorage;
  }

  const [searchValue, setSearchValue] = useState('')
  const [tasks, setTasks] = useState(initialTasks)

  const taskCompleted = tasks.filter(task => task.completed).length
  const taskTotal = tasks.length

  const upDateTasks = (newTasks) => {
    console.log(newTasks);
    window.localStorage.setItem('TASK_V1', JSON.stringify(newTasks))
    setTasks(newTasks)
    console.log(localStorage);
  }

  const setCompleted = (e) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex(
      (task) => task.id == e.target.getAttribute('id')
    )
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    upDateTasks(newTasks)
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
      (task) => task.id == e.target.parentNode.getAttribute('id')
    )
    newTasks.splice(taskIndex, 1)
    upDateTasks(newTasks)
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
    upDateTasks(newTasks)

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

import { useContext, useState } from "react"
import { CreateItem } from "../CreateItem"
import { TasksContext } from "../Context"


function TaskForm() {
  const { addTask, setOpenModal } = useContext(TasksContext)
  const [newTask, setNewTask] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
    setOpenModal(false)
  }
  const onChange = (e) => {
    setNewTask(e.target.value)
  }
  return (
    <form
      onSubmit={onSubmit}
      className='absolute bg-zinc-900 inset-x-0 top-8 flex flex-col p-4 gap-2 items-center border-zinc-400 border-2 rounded-md max-w-xs m-auto'>
      <h2 className='text-lg'>Create New Task</h2>
      <textarea type="text" placeholder="what's next?" onChange={onChange} value={newTask} className='block p-2 min-h-min rounded-md outline-none focus:outline-violet-700' />
      <CreateItem addTask={onSubmit} />
      <button
        className="hover:border-red-800 hover:bg-red-400 border-white text-sm scale-75 absolute -top-4 -right-4"
        onClick={() => setOpenModal(false)}>x</button>
    </form>
  )
}

export { TaskForm } 
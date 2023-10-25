import { Search } from '../Search'
import { List } from '../List'
import { Task } from '../Task'
import { TasksLoading } from '../TasksLoading'
import { TasksError } from '../TasksError'
import { TasksEmpty } from '../TasksEmpty'
import { CreateItem } from '../CreateItem'
import { CounterItems } from '../CounterItems'
import { Modal } from '../Modal'

import { TasksContext } from '../Context'
import { useContext } from 'react'

function AppUI() {
  const {
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
    setOpenModal,
  } = useContext(TasksContext)
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Create new task</button>
      <main className='flex flex-col gap-8 items-center'>
        <header className='p-8'>
          <h1 className='font-bold'>Your Tasks</h1>
        </header>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <List>
          {loading && <TasksLoading />}
          {error && <TasksError />}
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
      {
        (!loading && searchTask.length === 0)
          ? <TasksEmpty />
          : <CounterItems completed={taskCompleted} total={taskTotal} />
      }

      {
        openModal && (
          <Modal>
            <section className='absolute inset-0 bg-zinc-900 bg-opacity-70 w-screen h-screen '>
              <article className='absolute bg-zinc-900 inset-x-0 top-8 flex flex-col p-4 gap-2 items-center border-zinc-400 border-2 rounded-md max-w-xs m-auto'>
                <h2 className='text-lg'>Create New Task</h2>
                <input type="text" placeholder="what's next?" className='block p-2 rounded-md outline-none focus:outline-violet-700' />
                <CreateItem addTask={addTask} />
                <button
                  className="hover:border-red-800 hover:bg-red-400 text-sm scale-75 absolute -top-4 -right-4"
                  onClick={() => setOpenModal(false)}>x</button>
              </article>
            </section>
          </Modal>
        )
      }
    </>
  )
}

export { AppUI }
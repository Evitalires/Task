import { Search } from '../Search'
import { List } from '../List'
import { Task } from '../Task'
import { TasksLoading } from '../TasksLoading'
import { TasksError } from '../TasksError'
import { TasksEmpty } from '../TasksEmpty'
import { CounterItems } from '../CounterItems'
import { Modal } from '../Modal'
import { TaskForm } from '../TaskForm'

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
            <TaskForm />
          </Modal>
        )
      }
    </>
  )
}

export { AppUI }
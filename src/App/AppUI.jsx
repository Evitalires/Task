import { Search } from '../Search'
import { List } from '../List'
import { Task } from '../Task'
/* import { TaskLoading } from ' ../TaskLoading'
 */import { CreateItem } from '../CreateItem'
import { CounterItems } from '../CounterItems'

function AppUI({
  error,
  loading,
  addTask,
  searchValue,
  setSearchValue,
  searchTask,
  setCompleted,
  deleteTask,
  taskCompleted,
  taskTotal
}) {
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
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
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
      {(!loading && searchTask.length === 0)
        ? <p>Create your first task!</p>
        : <CounterItems completed={taskCompleted} total={taskTotal} />}
    </>
  )
}

export { AppUI }
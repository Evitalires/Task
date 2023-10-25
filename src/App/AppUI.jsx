import { Search } from '../Search'
import { List } from '../List'
import { Task } from '../Task'
import { TasksLoading } from '../TasksLoading'
import { TasksError } from '../TasksError'
import { TasksEmpty } from '../TasksEmpty'
import { CreateItem } from '../CreateItem'
import { CounterItems } from '../CounterItems'

import { TasksContext } from '../Context'

function AppUI({
}) {
  return (
    <>
      <TasksContext.Consumer>
        {({
          error,
          loading,
          addTask,
          searchValue,
          setSearchValue,
          searchTask,
          setCompleted,
          deleteTask,
        }) =>
        (
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
                : <CounterItems /* completed={taskCompleted} total={taskTotal} */ />
            }
          </>
        )
        }
      </TasksContext.Consumer>
    </>
  )
}

export { AppUI }
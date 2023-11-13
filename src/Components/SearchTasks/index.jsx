import { useContext } from "react"
import { TasksContext } from "../../Context"
import { Search } from "../../Search"
import { List } from "../../List"
import { TasksLoading } from "../../TasksLoading"
import { TasksError } from "../../TasksError"
import { Task } from "../../Task"
import { NewTask } from "../NewTask"

function SearchTaskHeader() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TasksContext)
  return (
    <div className="flex gap-4  justify-between items-center">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NewTask />
    </div>
  )
}

export default function SearchTasks() {
  const {
    error,
    setCompleted,
    deleteTask,
    loading,
    searchTask,
  } = useContext(TasksContext)
  return (
    <section className="flex flex-col gap-4 borde">
      <SearchTaskHeader />
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
    </section>
  )
}
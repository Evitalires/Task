import { useContext } from "react"
import { TasksContext } from "../../Context"
import { Search } from "../../Search"
import { List } from "../../List"
import { TasksLoading } from "../../TasksLoading"
import { TasksError } from "../../TasksError"
import { Task } from "../../Task"

export default function SearchTasks() {
  const {
    error,
    searchValue,
    setSearchValue,
    setCompleted,
    deleteTask,
    loading,
    searchTask,
  } = useContext(TasksContext)
  return (
    <>
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
    </>
  )
}
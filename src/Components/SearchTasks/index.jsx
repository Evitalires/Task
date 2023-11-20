import { useContext } from "react"
import { TasksContext } from "../../Context"
import { List } from "../../List"
import { TasksLoading } from "../../TasksLoading"
import { TasksError } from "../../TasksError"
import { Task } from "../../Task"
import SearchTaskHeader from "../SearchTaskHeader"



export default function SearchTasks() {
  const {
    error,
    setCompleted,
    deleteTask,
    loading,
    searchTask,
    searchValue
  } = useContext(TasksContext)
  
  console.log(searchTask);
  return (
    <section className="flex flex-col gap-4 borde">
      <SearchTaskHeader />
      <List>
        {loading && <TasksLoading />}
        {error && <TasksError />}
        {searchValue && searchTask.map((item) => (
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
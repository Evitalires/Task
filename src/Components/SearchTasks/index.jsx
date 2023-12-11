import { useContext } from "react";
import { TasksContext } from "../../Context";
import { List } from "../../List";
import { TasksLoading } from "../../TasksLoading";
import { TasksError } from "../../TasksError";
import { Task } from "../Task";
import SearchTaskHeader from "../SearchTaskHeader";
import { TaskForm } from "../TaskForm";

export default function SearchTasks() {
  const {
    error,
    setCompleted,
    deleteTask,
    loading,
    searchTask,
    searchValue,
    setComponentModal,
    setOpenModal,
  } = useContext(TasksContext);
  const onEditTask = (task) => {
    console.log(task.id, "searchTask");
    // Handle edit task logic
    setComponentModal(<TaskForm task={task} />);
    setOpenModal(true);
  };
  return (
    <section className="flex flex-col gap-4 border border-blue-400  rounded-lg  p-4">
      <SearchTaskHeader />
      <List>
        {loading && <TasksLoading />}
        {error && <TasksError />}
        {searchValue &&
          searchTask.map((item) => (
            <Task
              text={item.task}
              key={item.id}
              id={item.id}
              status={item.status}
              setCompleted={setCompleted}
              deleteTask={deleteTask}
              editTask={onEditTask}
            />
          ))}
      </List>
    </section>
  );
}

import SearchTask from "../SearchTasks"
import { Typography } from "@material-tailwind/react";
import TaskCollapse from "../TaskCollapse";
import { TasksContext } from "../../Context";
import { useContext } from "react";


export default function TaskPreviewActive() {
  const { tasks } = useContext(TasksContext)
  console.log(tasks, 'ttt');
  return (
    <section className="flex flex-col gap-4">
      <SearchTask />
      <div>
        <Typography variant="h5" className="text-left" >Today</Typography>
        <TaskCollapse />
      </div>
      <div>
        <Typography variant="h5" className="text-left" >Tomorrow</Typography>
        <TaskCollapse />
      </div>
      <div>
        <Typography variant="h5" className="text-left" >All</Typography>
        {
          tasks.map(task => <TaskCollapse key={task.id} taskDetail={task.text} />)
        }
      </div>
    </section>
  )
}
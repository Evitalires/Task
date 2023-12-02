import SearchTask from "../SearchTasks";
import { Typography } from "@material-tailwind/react";
import TaskCollapse from "../TaskCollapse";
import { TasksContext } from "../../Context";
import { useContext } from "react";

export default function TaskPreviewActive() {
  const { tasks } = useContext(TasksContext);
  console.log(tasks, "TaskPreviewActive");
  return (
    <section className="flex flex-col gap-4">
      <SearchTask />
      <div>
        <Typography variant="h5" className="text-left">
          Today
        </Typography>
        <TaskCollapse />
      </div>
      <div>
        <Typography variant="h5" className="text-left">
          Tomorrow
        </Typography>
        <TaskCollapse />
      </div>
      <div>
        <Typography variant="h5" className="text-left">
          All
        </Typography>
        {tasks.map((task) => {
          /* console.log(task, "taskActive"); */
          return <TaskCollapse key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
}

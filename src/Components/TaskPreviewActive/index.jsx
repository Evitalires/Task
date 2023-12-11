import SearchTask from "../SearchTasks";
import { Typography } from "@material-tailwind/react";
import TaskCollapse from "../TaskCollapse";
import { TasksContext } from "../../Context";
import { useContext } from "react";
import TasksTomorrow from "../TasksTomorrow";
import TasksToday from "../TasksToday";

export default function TaskPreviewActive() {
  const { tasks } = useContext(TasksContext);
  return (
    <section className="flex flex-col gap-4">
      <SearchTask />
      <TasksToday />
      <TasksTomorrow />

      <div className="flex flex-col gap-4">
        <Typography variant="h5" className="text-left">
          All
        </Typography>
        {tasks.map((task) => (
          <TaskCollapse key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

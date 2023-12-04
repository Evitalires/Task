import SearchTasks from "../SearchTasks";
import TaskCollapse from "../TaskCollapse";
import { TasksContext } from "../../Context";
import { useContext } from "react";

export default function TaskPreviewFinished() {
  const { tasks } = useContext(TasksContext);
  return (
    <div>
      <SearchTasks />
      Finished tasks...
      {tasks.map((task) => {
        if (task.status === "COMPLETED") {
          return <TaskCollapse key={task.id} task={task} />;
        }
      })}
    </div>
  );
}

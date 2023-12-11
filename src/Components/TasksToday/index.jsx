import { useContext } from "react";
import { TasksContext } from "../../Context";
import TaskCollapse from "../TaskCollapse";
import { Typography } from "@material-tailwind/react";

export default function TasksToday() {
  const { tasks } = useContext(TasksContext);
  const currentDate = new Date();
  // Filter tasks where the dueDate is equal to the current date
  const filterTasksForToday = (tasks) => {
    return tasks.filter((task) => {
      const taskDueDate = new Date(task.dateReminder);
      if (
        currentDate.getFullYear() === taskDueDate.getFullYear() &&
        currentDate.getMonth() === taskDueDate.getMonth() &&
        currentDate.getDate() === taskDueDate.getUTCDate()
      ) {
        return task;
      }
    });
  };

  const tasksToday = filterTasksForToday(tasks);
  if (tasksToday.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <Typography variant="h5" className="text-left">
          Today
        </Typography>
        {tasksToday.map((task) => (
          <TaskCollapse key={task.id} task={task} />
        ))}
      </div>
    );
  } else {
    return (
      <Typography variant="h5" className="text-left">
        No tasks due today
      </Typography>
    );
  }
}

import { useContext } from "react";
import { TasksContext } from "../../Context";
import TaskCollapse from "../TaskCollapse";
import { Typography } from "@material-tailwind/react";

export default function TasksTomorrow() {
  const { tasks } = useContext(TasksContext);
  const currentDate = new Date();

  // Get tomorrow's date
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // Filter tasks where the dueDate is equal to tomorrow's date
  const filterTasksForTomorrow = (tasks) => {
    return tasks.filter((task) => {
      const taskDueDate = new Date(task.dateReminder);

      // Compare with tomorrow's date
      if (
        tomorrowDate.getFullYear() === taskDueDate.getFullYear() &&
        tomorrowDate.getMonth() === taskDueDate.getMonth() &&
        tomorrowDate.getDate() === taskDueDate.getUTCDate()
      ) {
        return task;
      }
    });
  };

  const tasksTomorrow = filterTasksForTomorrow(tasks);

  if (tasksTomorrow.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <Typography variant="h5" className="text-left">
          Tomorrow
        </Typography>
        {tasksTomorrow.map((task) => (
          <TaskCollapse key={task.id} task={task} />
        ))}
      </div>
    );
  } else {
    return (
      <Typography variant="h5" className="text-left">
        No tasks due tomorrow
      </Typography>
    );
  }
}

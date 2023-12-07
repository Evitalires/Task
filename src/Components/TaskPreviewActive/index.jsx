import SearchTask from "../SearchTasks";
import { Typography } from "@material-tailwind/react";
import TaskCollapse from "../TaskCollapse";
import { TasksContext } from "../../Context";
import { useContext } from "react";

function TasksTomorrow() {
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
      <div>
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

function TasksToday() {
  const { tasks } = useContext(TasksContext);
  const currentDate = new Date();
  // Filter tasks where the dueDate is equal to the current date
  const filterTasksForToday = (tasks) => {
    return tasks.filter((task) => {
      console.log(task.dateReminder, "task.dateReminder");
      const taskDueDate = new Date(task.dateReminder);

      console.log(currentDate.getFullYear(), taskDueDate.getFullYear());
      console.log(currentDate.getMonth(), taskDueDate.getMonth());
      console.log(currentDate.getDate(), taskDueDate.getUTCDate());
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
  if (tasksToday.length >= 0) {
    return (
      <div>
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
export default function TaskPreviewActive() {
  const { tasks } = useContext(TasksContext);
  console.log(tasks, "TaskPreviewActive");
  return (
    <section className="flex flex-col gap-4">
      <SearchTask />
      <TasksToday />
      <TasksTomorrow />

      <div>
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

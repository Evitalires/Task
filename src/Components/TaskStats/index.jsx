import { Typography, Card } from "@material-tailwind/react"; //
import { useContext } from "react";
import { TasksContext } from "../../Context";

function StatsUI({ type, taskLeft, taskTodo, taskLate, taskDone }) {
  return (
    <div className="statsWeekly w-1/2">
      <div className="flex gap-4">
        <Card className="flex flex-1 p-2 gap-2 items-center">
          <Typography varient="h6">Stats {type}</Typography>
          <div className="flex h-full w-40 bg-gray-200 rounded-full items-center justify-center">
            <Typography
              varient="h4"
              className="font-bold text-xl rounded-full bg-gray-300 h-[90%] w-[90%] flex text-center justify-center items-center"
            >
              {taskLeft} <br /> Left
            </Typography>
          </div>
        </Card>
        <Card
          className="w-24 h-42 grid content-around outline-none"
          color="blue"
        >
          <Typography className="p-2 border border-white" varient="h6">
            {taskTodo} <br /> To do
          </Typography>
          <Typography className="p-2 border border-white" varient="h6">
            {taskLate} <br /> Late
          </Typography>
          <Typography className="p-2 border border-white" varient="h6">
            {taskDone} <br /> Done
          </Typography>
        </Card>
      </div>
    </div>
  );
}
function Stats({ type, tasks }) {
  const taskfilter = (status) => {
    return tasks.filter((task) => task.status === status);
  };
  const taskLeft = () => taskfilter("ACTIVE").length;
  const taskLate = () => taskfilter("LATE").length;
  const taskDone = () => taskfilter("FINISHED").length;
  return (
    <StatsUI
      type={type}
      taskLeft={tasks.length}
      taskTodo={taskLeft()}
      taskLate={taskLate()}
      taskDone={taskDone()}
    />
  );
}

export default function TaskStats() {
  const { tasks } = useContext(TasksContext);
  const formatDate = (date) => {
    date = date.toLocaleDateString().split("/");
    date = date.map((digit) => (digit.length === 1 ? `0${digit}` : digit));
    date = date.reverse().join("-").toString();
    return date;
  };
  const taskFilterMontly = (tasks) => {
    // Get the current date
    const today = new Date();
    // Calculate the start and end of the current month
    let startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    startOfMonth = formatDate(startOfMonth);
    endOfMonth = formatDate(endOfMonth);
    const filteredTasks = tasks.filter(
      (task) =>
        task.dateReminder >= startOfMonth && task.dateReminder <= endOfMonth,
    );
    return filteredTasks;
  };
  const taskFilterWeekly = (tasks) => {
    // Get the current date
    const today = new Date();
    // Calculate the start and end of the current week
    let startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Set to the first day of the week (Sunday in JavaScript)
    let endOfWeek = new Date(startOfWeek);

    endOfWeek.setDate(startOfWeek.getDate() + 7); // Set to the last day of the week

    endOfWeek = formatDate(endOfWeek);
    startOfWeek = formatDate(startOfWeek);
    // Filter dates that are within the current week
    const filteredTasks = tasks.filter(
      (task) =>
        task.dateReminder >= startOfWeek && task.dateReminder <= endOfWeek,
    );
    return filteredTasks;
  };
  return (
    <Card className="w-full flex flex-col items-center gap-4">
      <Typography variant="h4" className="font-bold">
        Stats
      </Typography>
      <Stats type={"Weekly"} tasks={taskFilterWeekly(tasks)} />
      <Stats type={"Montly"} tasks={taskFilterMontly(tasks)} />
    </Card>
  );
}

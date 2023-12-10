import {
  Collapse,
  Card,
  Typography,
  CardBody,
  CardFooter,
  Checkbox,
} from "@material-tailwind/react";
import { IconChevronDown, IconEdit, IconTrash } from "../Icons";
import { useState, useContext } from "react";
import { TasksContext } from "../../Context";
import { TaskForm } from "../TaskForm";

export default function TaskCollapse({ task }) {
  const { setFinished, deleteTask, setComponentModal, setOpenModal } =
    useContext(TasksContext);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const formatTime12Hour = (militaryTime) => {
    const [hours, minutes] = militaryTime.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  const editTask = () => {
    // Handle edit task logic
    setComponentModal(<TaskForm task={task} />);
    setOpenModal(true);
  };

  return (
    <>
      <Card className="mx-auto w-full flex">
        <CardBody className="p-2">
          <div className="w-full flex items-center">
            <Checkbox
              onClick={() => setFinished(task.id)}
              ripple={false}
              color="blue"
              className="h-8 w-8 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
            />
            <div className="text-left flex-1">
              <Typography variant="h6" color="gray">
                {task.task}
              </Typography>
              <Typography variant="small" color="gray">
                {task.category}
              </Typography>
            </div>
            <IconChevronDown
              onClick={toggleOpen}
              color="blue"
              className="p-0 bg-transparent shadow-none text-black cursor-pointer"
            />
          </div>
          <Collapse open={open}>
            <Card className="h-auto mx-auto w-full">
              <CardBody>
                <Typography>{task.taskDetails}</Typography>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
        <CardFooter className="p-2 pl-4 pr-2 flex ">
          <div className="flex flex-1 gap-2">
            <Typography className="py-1 px-2 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300">
              {formatTime12Hour(task.timeReminder)}
            </Typography>
            <Typography className="py-1 px-2 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300">
              {task.dateReminder}
            </Typography>
          </div>
          <IconEdit onClick={editTask} />
          <IconTrash onClick={deleteTask} />
        </CardFooter>
      </Card>
    </>
  );
}

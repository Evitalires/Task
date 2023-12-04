import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Checkbox,
} from "@material-tailwind/react";
import { IconChevronDown } from "../Icons";
import { useState, useContext } from "react";
import { TasksContext } from "../../Context";

export default function TaskCollapse({ task }) {
  const { setCompleted } = useContext(TasksContext);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card className="mx-auto w-full flex">
        <CardBody>
          <div className="w-full flex">
            <Checkbox
              onClick={() => setCompleted(task.id)}
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
            <Button
              onClick={toggleOpen}
              color="blue"
              className="p-0 bg-transparent shadow-none text-black"
            >
              {" "}
              <IconChevronDown />{" "}
            </Button>
          </div>
          <Collapse open={open}>
            <Card className="h-auto mx-auto w-full">
              <CardBody>
                <Typography>{task.taskDetails}</Typography>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </>
  );
}

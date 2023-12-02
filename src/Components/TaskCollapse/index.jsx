import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Checkbox,
} from "@material-tailwind/react";
import { IconChevronDown } from "../Icons";
import { useState } from "react";

export default function TaskCollapse(task) {
  console.log(task, "TaskCollapse");
  const [open, setOpen] = useState(false);
  const description = task.description || "taskDescription";
  const category = task.category || "taskCategory";

  const toggleOpen = () => setOpen((cur) => !cur);
  const setFinished = () => {};
  return (
    <>
      <Card className="mx-auto w-full flex">
        <CardBody>
          <div className="w-full flex">
            <Checkbox
              onClick={() => setFinished()}
              ripple={false}
              color="blue"
              className="h-8 w-8 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
            />
            <div className="text-left flex-1">
              <Typography variant="h6" color="gray">
                {"taskDescription"}
              </Typography>
              <Typography variant="small" color="gray">
                {"taskCategory"}
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
                <Typography>{"taskDescription :)"}</Typography>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </>
  );
}

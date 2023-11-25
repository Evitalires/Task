import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Checkbox
} from "@material-tailwind/react";
import { IconChevronDown } from "../Icons";
import { useState } from "react";

export default function TaskCollapse({ taskDescription, taskDetail, taskType }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card className="mx-auto w-full">
        <CardBody className="flex items-center">
          <Checkbox
            ripple={false}
            color="blue"
            className="h-8 w-8 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
          />
          <div className="text-left flex-1">
            <Typography variant="h6" color="gray" >
              {taskDetail || 'taskDetail'}
            </Typography>
            <Typography variant="small" color="gray">

              {taskType || 'taskType'}
            </Typography>
          </div>
          <Button onClick={toggleOpen} color="blue" className="p-0 bg-transparent shadow-none text-black"> <IconChevronDown /> </Button>
        </CardBody>
      </Card>

      <Collapse open={open}>
        <Card className="mx-auto w-full">
          <CardBody>
            <Typography>
              {taskDescription || 'taskDescription'}
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}

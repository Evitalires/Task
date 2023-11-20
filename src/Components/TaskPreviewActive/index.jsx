import { useState } from "react";
import SearchTask from "../SearchTasks"

import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Checkbox
} from "@material-tailwind/react";
import { IconChevronDown } from "../Icons";

function TaskCollapse() {
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
              Task Detail
            </Typography>
            <Typography variant="small" color="gray">
              Task type
            </Typography>
          </div>
          <Button onClick={toggleOpen} color="blue" className="p-0 bg-transparent shadow-none text-black"> <IconChevronDown /> </Button>
        </CardBody>
      </Card>

      <Collapse open={open}>
        <Card className="mx-auto w-full">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}

export default function TaskPreviewActive() {
  return (
    <section className="flex flex-col gap-4">
      <SearchTask />
      <div>
        <Typography variant="h5" className="text-left" >Today</Typography>
        <TaskCollapse />
      </div>
      <div>
        <Typography variant="h5" className="text-left" >Tomorrow</Typography>
        <TaskCollapse />
      </div>
    </section>
  )
}
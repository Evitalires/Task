import { useContext, useState } from "react";
import { TasksContext } from "../Context";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

export function TaskForm() {
  const { openModal, addTask, setOpenModal } = useContext(TasksContext);
  const newTaskFormat = {
    id: "",
    task: "",
    taskDetails: "",
    category: "",
    dateCreation: "",
    timeCreation: "",
    repeat: "",
    timeReminder: "",
    dateReminder: "",
    status: "" /* ACTIVE | FINISHED | COMPLETED */,
  };
  const [newTask, setNewTask] = useState(newTaskFormat);
  const onSubmit = (e) => {
    e.preventDefault();

    let copyNewTask = { ...newTask };
    copyNewTask.id = Date.now();
    copyNewTask.dateCreation = new Date().toLocaleDateString();
    copyNewTask.timeCreation = new Date().toLocaleTimeString();
    copyNewTask.status = "ACTIVE";

    addTask(newTask);
    setNewTask(newTaskFormat);
    setOpenModal(false);
  };

  const setNewTaskProperty = (e, property) => {
    let copyNewTask = { ...newTask };
    copyNewTask[property] = e.target.value;
    setNewTask(copyNewTask);
  };
  const setNewTaskCategory = (value) => {
    let copyNewTask = { ...newTask };
    copyNewTask.category = value;
    setNewTask(copyNewTask);
  };
  return (
    <Dialog open={openModal} handler={setOpenModal}>
      <DialogHeader>Task Form</DialogHeader>
      <DialogBody>
        <form
          onSubmit={onSubmit}
          className=" flex flex-col gap-6 w-full min-h-min"
        >
          <Input
            type="text"
            color="blue"
            label="Task"
            onChange={(e) => setNewTaskProperty(e, "task")}
          />
          <Input
            type="text"
            color="blue"
            label="Add Details"
            onChange={(e) => setNewTaskProperty(e, "taskDetails")}
          />
          <Select
            size="md"
            color="blue"
            label="Category"
            onChange={setNewTaskCategory}
          >
            <Option value="Study"> Study </Option>
            <Option value="Hobby"> Hobby</Option>
            <Option value="Work"> Work</Option>
            <Option value="Personal"> Personal </Option>
            <Option value="Other"> Other </Option>
          </Select>
          <Input
            type="date"
            color="blue"
            label="Day"
            onChange={(e) => setNewTaskProperty(e, "dateReminder")}
          />
          <Input
            type="time"
            color="blue"
            label="Set time"
            onChange={(e) => setNewTaskProperty(e, "timeReminder")}
          />
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={(e) => setOpenModal(false)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="blue" onClick={onSubmit}>
          <span>Create</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

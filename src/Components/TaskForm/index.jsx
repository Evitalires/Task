import { useContext, useState } from "react";
import { TasksContext } from "../../Context";

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

export function TaskForm({ task, type }) {
  const { openModal, addTask, setOpenModal, tasks, setTasks } =
    useContext(TasksContext);
  const format = {
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
  const [newTask, setNewTask] = useState({ ...task } || format);
  const generateID = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 8; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(id, "generateID");
    return id;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newTask, "newTask");

    if (type !== "new") {
      let copyTasks = [...tasks];
      let indexNewTask = copyTasks.findIndex((task) => task.id === newTask.id);
      copyTasks[indexNewTask] = newTask;
      setTasks([...copyTasks]);
      setNewTask(format);
    } else {
      let copyNewTask = { ...newTask };
      copyNewTask.id = generateID();
      copyNewTask.dateCreation = new Date().toLocaleDateString();
      copyNewTask.timeCreation = new Date().toLocaleTimeString();
      copyNewTask.status = "ACTIVE";

      addTask(copyNewTask);
      setNewTask(format);
    }
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
  const handleClose = (e) => {
    setNewTask(format);
    setOpenModal(false);
  };
  return (
    <Dialog open={openModal} handler={handleClose}>
      <DialogHeader>Task Form </DialogHeader>
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
            value={newTask.task}
          />
          <Input
            type="text"
            color="blue"
            onChange={(e) => setNewTaskProperty(e, "taskDetails")}
            label="Add Details"
            value={newTask.taskDetails}
          />
          <Select
            size="md"
            color="blue"
            label={newTask.category || "Category"}
            onChange={setNewTaskCategory}
            selected={newTask.category}
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
            value={newTask.dateReminder}
          />
          <Input
            type="time"
            color="blue"
            label="Set time"
            onChange={(e) => setNewTaskProperty(e, "timeReminder")}
            value={newTask.timeReminder}
          />
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleClose}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="blue" onClick={onSubmit}>
          <span>Save</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

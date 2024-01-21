import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
/* 
newTaskFormat = {
    id: "",
    task: "",
    taskDetails: "",
    category: "",
    dateCreation: "",
    timeCreation: "",
    repeat: "",
    timeReminder: "",
    dateReminder: "",
    status: ACTIVE | FINISHED | COMPLETED 
  };
   */
const TasksContext = createContext();

function TasksProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [componentModal, setComponentModal] = useState(null);
  const {
    items: tasks,
    saveItems: setTasks,
    error,
    loading,
  } = useLocalStorage("TASK_V1", []);
  const [openModal, setOpenModal] = useState(false);

  const taskFinished = tasks.filter(
    (task) => task.status === "FINISHED",
  ).length;
  const taskTotal = tasks.length;

  const setFinished = (id) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].status = "FINISHED";
    setTasks(newTasks);
  };
  const setStatus = (id, status) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].status = status;
    setTasks(newTasks);
  };
  const searchTask = tasks.filter((task) =>
    task.task
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchValue.toLowerCase().replace(/\s/g, "")),
  );
  const finishTask = (e) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.id === e.target.parentNode.getAttribute("id"),
    );
    newTasks[taskIndex].status = "FINISHED";
    setTasks(newTasks);
  };
  const deleteTask = (e) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.id === e.target.parentNode.getAttribute("id"),
    );
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };
  const addTask = (task) => {
    const newTasks = [...tasks];
    const newTask = task;
    newTasks.push(newTask);
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        error,
        loading,
        addTask,
        searchValue,
        setSearchValue,
        searchTask,
        setStatus,
        setFinished,
        deleteTask,
        taskFinished,
        taskTotal,
        openModal,
        componentModal,
        setComponentModal,
        setOpenModal,
        finishTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksProvider, TasksContext };

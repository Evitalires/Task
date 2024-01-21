import { TasksContext } from "../Context";
import { useContext } from "react";

import { TasksEmpty } from "../TasksEmpty";
import { CounterItems } from "../CounterItems";
import { Modal } from "../Modal";
import { TaskForm } from "../Components/TaskForm";
import Header from "../Components/Header";
import UserTaskStatus from "../Components/UserTaskStatus";
import Calendar from "../Components/Calendar";
import TaskPreview from "../Components/TaskPreview";
import TaskStats from "../Components/TaskStats";

function AppUI() {
  const {
    loading,
    searchTask,
    taskCompleted,
    taskTotal,
    openModal,
    componentModal,
  } = useContext(TasksContext);
  return (
    <>
      <Header></Header>
      <main className="flex flex-col gap-8 items-center">
        <UserTaskStatus />
        <Calendar />
        <TaskPreview />
        <TaskStats />
      </main>
      {!loading && searchTask.length === 0 ? (
        <TasksEmpty />
      ) : (
        <CounterItems completed={taskCompleted} total={taskTotal} />
      )}

      {openModal && <Modal>{componentModal || <TaskForm type="new" />}</Modal>}
    </>
  );
}

export { AppUI };

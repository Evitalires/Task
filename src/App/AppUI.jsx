import { TasksContext } from "../Context";
import { useContext } from "react";

import { TasksEmpty } from "../TasksEmpty";
import { CounterItems } from "../CounterItems";
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";
import Header from "../Components/Header";
import UserTaskStatus from "../Components/UserTaskStatus";
import Calendar from "../Components/Calendar";
import TaskPreview from "../Components/TaskPreview";

function AppUI() {
  const { loading, searchTask, taskCompleted, taskTotal, openModal } =
    useContext(TasksContext);
  return (
    <>
      <Header></Header>
      <main className="flex flex-col gap-8 items-center">
        <UserTaskStatus />
        <Calendar />
        <TaskPreview />
      </main>
      {!loading && searchTask.length === 0 ? (
        <TasksEmpty />
      ) : (
        <CounterItems completed={taskCompleted} total={taskTotal} />
      )}

      {openModal && (
        <Modal>
          <TaskForm /> {/* NewTaskForm */}
        </Modal>
      )}
    </>
  );
}

export { AppUI };

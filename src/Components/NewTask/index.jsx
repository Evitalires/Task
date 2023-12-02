import { Button } from "@material-tailwind/react";
import { IconPlusCircle } from "../Icons";
import { useContext } from "react";
import { TasksContext } from "../../Context";

export default function NewTask() {
  const { setOpenModal } = useContext(TasksContext);
  return (
    <Button
      onClick={() => setOpenModal(true)}
      className="flex items-center gap-2 min-w-fit bg-blue-700 "
    >
      New Task
      <IconPlusCircle />
    </Button>
  );
}

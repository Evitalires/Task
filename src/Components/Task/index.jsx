import { Typography, Button, Checkbox } from "@material-tailwind/react";
import { IconTrash, IconEdit } from "../Icons";

function Task({ text, id, setCompleted, deleteTask }) {
  return (
    <li
      className="text-left pe-4 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer "
      id={id}
      onClick={() => setCompleted(id)}
    >
      <Checkbox
        onClick={setCompleted}
        ripple={false}
        color="blue"
        className="h-6 w-6 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
      />
      <Button
        color="blue"
        className="p-0 bg-transparent shadow-none text-black"
      />
      <div className="text-left flex-1">
        <Typography variant="h6" color="gray">
          {text}
        </Typography>
      </div>
      <IconEdit />
      <IconTrash onClick={deleteTask} />
    </li>
  );
}

export { Task };

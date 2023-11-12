import { useContext } from "react"
import { TasksContext } from "../../Context"

export default function TaskPreviewFinished() {
  const { setOpenModal } = useContext(TasksContext)
  return (
    <button onClick={() => setOpenModal(true)}>Create new task</button>
  )
}
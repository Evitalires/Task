import { IconCheck } from "../Icons"

function Logo() {
  return (
    <picture className="flex font-bold gap-3 text-blue-500">
      <IconCheck />
      <p>Task App</p>
    </picture>
  )
}

export default Logo
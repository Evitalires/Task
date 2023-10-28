import { Check } from "../Icons"

function Logo() {
  return (
    <picture className="flex font-bold gap-3 text-blue-500">
      <Check />
      <p>Task App</p>
    </picture>
  )
}

export default Logo
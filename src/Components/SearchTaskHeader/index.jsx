import { useContext } from "react"
import { TasksContext } from "../../Context"
import { Search } from "../../Search"
import { NewTask } from "../NewTask"

export default function SearchTaskHeader() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TasksContext)
  return (
    <div className="flex gap-4  justify-between items-center">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NewTask />
    </div>
  )
}
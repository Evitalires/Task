function CreateItem({ addTask }) {
  return (
    <button className="w-28 hover:border-violet-700" onClick={addTask}>Create</button>
  )
}

export { CreateItem }
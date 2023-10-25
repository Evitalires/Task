function Task({ text, completed, id, setCompleted, deleteTask }) {
  const style = `py-2 px-3 pr-8 relative rounded-md border ${completed && 'line-through'} text-left border-zinc-300 flex gap-2 cursor-pointer`
  return (
    <li className={style} id={id} onClick={setCompleted}>
      <input type="checkbox" checked={completed && completed} readOnly id={id} onClick={setCompleted} onChange={setCompleted} />
      {text}
      <button className="hover:border-red-800 hover:bg-red-400 text-sm scale-75 absolute -top-4 -right-4" onClick={deleteTask}>x</button>
    </li>
  )
}

export { Task } 
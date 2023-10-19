function Task({ text, completed, id, setCompleted }) {
  console.log(completed);
  const style = `py-2 px-3 rounded-md border ${completed && 'line-through'} text-left border-zinc-300 flex justify-between gap-2`
  return (
    <li className={style} id={id} onClick={setCompleted}>
      {text}
      <input type="checkbox" checked={completed && completed} readOnly id={id} onClick={setCompleted} onChange={setCompleted} />
    </li>
  )
}

export { Task } 
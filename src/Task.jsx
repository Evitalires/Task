function Item({ text, completed, id }) {
  return (
    <li className="py-2 px-3 rounded-md border text-left border-zinc-300 flex justify-between gap-2">
      {text}
      <input type="checkbox" className="" />
    </li>
  )
}

export { Item } 
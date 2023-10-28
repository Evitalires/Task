export default function UserPreview() {
  return (
    <div className="flex gap-3 justify-center items-center">
      <p className="w-9 h-9 flex justify-center items-center rounded-lg bg-blue-100 text-blue-800 font-semibold" >AR</p>
      <div className="flex flex-col text-sm text-left font-semibold">
        <span>Alex Ramirez</span>
        <span className="font-light">Last session, today</span>
      </div>
    </div>
  )
}
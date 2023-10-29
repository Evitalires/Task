import { Typography } from "@material-tailwind/react"

Typography

export default function UserTaskStatus() {
  return (
    <section className="text-left flex gap-3 p-4 border border-blue-400 rounded-xl">
      <figure >
        <img
          className="w-24 h-36 rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
      </figure>
      <div>
        <Typography variant="lead">Hi, Alex Ramirez</Typography>
        <Typography variant="paragraph">
          You have 2 task left for today, <br />
          1 high priority and 1 low priority. <br />
          Already completed 3 tasks today. <br />
        </Typography>
      </div>
    </section>
  )
}
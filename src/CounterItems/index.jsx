function CounterItems({ completed, total }) {
  return (
    <section className="p-4">
      {//Create three states, no task, pending task and task completed
        completed == total
          ? <article className="text-green-400"> {total}/{completed} Tareas completadas</article>
          : <article className="text-violet-400">Task for complete: {completed} of {total}</article>
      }
    </section>
  )
}



export { CounterItems }

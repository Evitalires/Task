function CounterItems({ completed, total }) {
  return (
    <section className="p-4">
      <article>Task for complete: {completed} of {total}</article>
    </section>
  )
}



export { CounterItems }

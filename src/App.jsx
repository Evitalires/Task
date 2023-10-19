import { useState } from 'react'
import './App.css'
import { Search } from './Search'
import { List } from './List'
import { Item } from './Task'
import { CreateItem } from './CreateItem'
import { CounterItems } from './CounterItems'



function App() {
  const itemsData = [

    { id: 0, text: 'Make a coffee', completed: false },
    { id: 1, text: 'Create a Crud app', completed: false },
    { id: 2, text: 'Study Algorithms', completed: false },
    { id: 3, text: 'Create social Links', completed: true },
    { id: 4, text: 'Complete de MySQL project', completed: false },
    { id: 5, text: 'Create a zig design', completed: true },
  ]

  return (
    <>
      <section className='flex flex-col p-4 gap-2 items-center border-zinc-400 border-2 max-w-xs m-auto'>
        <h2 className='text-lg'>Create New Task</h2>
        <input type="text" placeholder="what's next?" className='block p-2 rounded-md outline-none focus:outline-violet-700' />
        <CreateItem />
      </section>

      <main className='flex flex-col gap-8 items-center'>
        <header className='p-8'>
          <h1 className='font-bold'>Your Tasks</h1>
        </header>
        <Search />
        <List>
          {
            itemsData.map((item) => (
              <Item
                text={item.text}
                key={item.id}
                id={item.id}
                complete={item.completed} />

            ))
          }
        </List>

      </main>
      <CounterItems completed={3} total={5} />
    </>
  )
}

export default App

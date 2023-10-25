'client'
import './App.css'
import { AppUI } from './AppUI'
import { TasksProvider } from '../Context'


function App() {
  return (
    <TasksProvider>
      <AppUI />
    </TasksProvider>
  )
}

export default App

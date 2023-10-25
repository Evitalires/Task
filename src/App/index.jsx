'client'
import './App.css'
import { AppUI } from './AppUI'
import { TasksProvider } from '../Context'


function App() {
  return (
    <TasksProvider>
      <AppUI
      /* loading={loading}
      error={error}
      addTask={addTask}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTask={searchTask}
      setCompleted={setCompleted}
      deleteTask={deleteTask}
      taskCompleted={taskCompleted}
      taskTotal={taskTotal} */
      />
    </TasksProvider>
  )
}

export default App

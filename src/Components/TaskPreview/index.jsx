import { Search } from "../../Search"
import { List } from "../../List"
import { TasksLoading } from "../../TasksLoading"
import { TasksError } from "../../TasksError"
import { Task } from "../../Task"
import { useContext } from "react"
import { TasksContext } from "../../Context"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


export default function TaskPreview() {
  const {
    error,
    searchValue,
    setSearchValue,
    setCompleted,
    deleteTask,
    setOpenModal,
    loading,
    searchTask,
  } = useContext(TasksContext)

  function TaskPreviewFinished() {
    return (
      <button onClick={() => setOpenModal(true)}>Create new task</button>
    )
  }

  function TaskPreviewActive() {
    return (
      <>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <List>
          {loading && <TasksLoading />}
          {error && <TasksError />}
          {
            searchTask.map((item) => (
              <Task
                text={item.text}
                key={item.id}
                id={item.id}
                completed={item.completed}
                setCompleted={setCompleted}
                deleteTask={deleteTask} />
            ))
          }
        </List>
      </>
    )
  }

  const data = [
    {
      label: "Active",
      value: "ACTIVE",
      Element: <TaskPreviewActive />
    },
    {
      label: "Finished",
      value: "FINISHED",
      Element: <TaskPreviewFinished />
    },
  ]
  return (
    <section>
      <Tabs value="Active">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, Element }) => (
            <TabPanel key={value} value={value}>
              {Element}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  )
}
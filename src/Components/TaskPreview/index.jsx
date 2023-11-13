import { Typography } from "@material-tailwind/react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TaskPreviewFinished from "../TaskPreviewFinished";
import TaskPreviewActive from "../TaskPreviewActive";

export default function TaskPreview() {

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
    <section className="w-full">
      <Tabs value="ACTIVE" className="flex flex-col gap-4" >
        <TabsHeader
          className="rounded-none border-b border-blue-200 bg-transparent p-0"
          indicatorProps={{
            className: "bg-transparent border-b-2 border-blue-400 shadow-none rounded-none",
          }}>
          <Typography variant="h5" className="text-left w-3/5" >Tasks</Typography>
          <Typography className="flex  gap-2 w-2/5">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </Typography>

        </TabsHeader>
        <TabsBody className="flex flex-col gap-4" >
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
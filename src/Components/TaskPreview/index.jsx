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
      <Tabs value="Active" >
        <TabsHeader className="p-2 items-center gap-2">
          <Typography variant="h5" className="text-left w-3/5" >Tasks</Typography>
          <Typography className="flex  gap-2 w-2/5 border border-red-100">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </Typography>

        </TabsHeader>
        <TabsBody>
          newTAsks...
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
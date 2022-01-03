import React from "react"
import { Grid } from "semantic-ui-react"

import { useAppSelector } from "../app/hooks"
import Task from "./task"
import { selectTasks } from "./tasksSlice"

const TaskList = () => {
  const tasks = useAppSelector(selectTasks)

  return (
    <Grid columns={3} style={{ width: "100%" }}>
      <Grid.Row>
        {tasks.map((task) => (
          <Grid.Column key={task.id}>
            <Task
              title={task.title}
              description={task.description}
              id={task.id}
              status={task.status}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}

export default TaskList

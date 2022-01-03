import React from "react"
import { Grid } from "semantic-ui-react"

import Task from "./task"

const TaskList = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Task />
      </Grid.Column>

      <Grid.Column>
        <Task />
      </Grid.Column>

      <Grid.Column>
        <Task />
      </Grid.Column>

      <Grid.Column>
        <Task />
      </Grid.Column>

      <Grid.Column>
        <Task />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default TaskList

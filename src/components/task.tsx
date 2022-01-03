import React from "react"
import { Card, Checkbox } from "semantic-ui-react"

const Task = () => {
  const desc =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam voluptatibus eaque illum qui soluta temporibus totam molestias ipsa voluptates earum dolor laudantium maxime velit debitis placeat, assumenda sequi corporis."

  return (
    <Card style={{ marginBottom: "2rem" }}>
      <Card.Content header='Task Title' />
      <Card.Content description={desc} />
      <Card.Content extra>
        <Checkbox id='task-complete' label='Complete' />
      </Card.Content>
    </Card>
  )
}

export default Task

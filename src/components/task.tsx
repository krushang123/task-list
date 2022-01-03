import React from "react"
import { Card, Checkbox } from "semantic-ui-react"

type TaskProps = {
  title: string
  description: string
}

const Task = ({ title, description }: TaskProps) => (
  <Card style={{ marginBottom: "2rem", width: "25rem" }}>
    <Card.Content header={title} />

    <Card.Content description={description} />

    <Card.Content extra>
      <Checkbox id='task-complete' label='Complete' />
    </Card.Content>
  </Card>
)

export default Task

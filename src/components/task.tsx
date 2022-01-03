import React from "react"
import { Button, Card, Checkbox, Icon } from "semantic-ui-react"

import { useAppDispatch } from "../app/hooks"
import { removeTask } from "./tasksSlice"

type TaskProps = {
  id: string
  title: string
  description: string
  status: "completed" | "pending"
}

const Task = ({ title, description, id, status }: TaskProps) => {
  const dispatch = useAppDispatch()

  const onRemoveTask = React.useCallback(() => {
    dispatch(
      removeTask({
        id,
        title,
        description,
        status,
      }),
    )
  }, [description, dispatch, id, status, title])

  return (
    <Card style={{ marginBottom: "2rem", width: "25rem" }}>
      <Card.Content header={title} />

      <Card.Content description={description} />

      <Card.Content extra>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Checkbox id='task-complete' label='Complete' />
          <Button icon onClick={onRemoveTask}>
            <Icon name='remove' />
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default Task

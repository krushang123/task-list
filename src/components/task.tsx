import React from "react"
import { Button, Card, Checkbox, Icon, Input } from "semantic-ui-react"

import { useAppDispatch } from "../app/hooks"
import { removeTask, updateTask } from "./tasksSlice"

type CardTitleProps = {
  titleVal: string
  setTitleVal: React.Dispatch<React.SetStateAction<string>>
  isEditable: boolean
}

type CardDescProps = {
  descVal: string
  setDescVal: React.Dispatch<React.SetStateAction<string>>
  isEditable: boolean
}

type TaskProps = {
  id: string
  title: string
  description: string
  status: "completed" | "pending"
}

const CardTitle = ({ titleVal, setTitleVal, isEditable }: CardTitleProps) => {
  const onChange = React.useCallback(
    (event) => {
      setTitleVal(event.target.value)
    },
    [setTitleVal],
  )

  return (
    <Input
      value={titleVal}
      readOnly={!isEditable}
      transparent={!isEditable}
      onChange={onChange}
    />
  )
}

const CardDesc = ({ descVal, setDescVal, isEditable }: CardDescProps) => {
  const onChange = React.useCallback(
    (event) => {
      setDescVal(event.target.value)
    },
    [setDescVal],
  )

  return (
    <Input
      value={descVal}
      readOnly={!isEditable}
      transparent={!isEditable}
      onChange={onChange}
    />
  )
}

const Task = ({ title, description, id, status }: TaskProps) => {
  const [titleVal, setTitleVal] = React.useState<string>(title)
  const [descVal, setDescVal] = React.useState<string>(description)
  const [isEditable, setIsEditable] = React.useState<boolean>(false)

  const dispatch = useAppDispatch()

  const onSaveTask = React.useCallback(() => {
    dispatch(
      updateTask({
        id,
        title: titleVal,
        description: descVal,
        status,
      }),
    )

    setIsEditable(false)
  }, [descVal, dispatch, id, status, titleVal])

  const onCancel = React.useCallback(() => {
    setTitleVal(title)
    setIsEditable(false)
  }, [title])

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

  const onStatusChange = React.useCallback(
    (event) => {
      dispatch(
        updateTask({
          id,
          title,
          description,
          status: event.target.checked ? "completed" : "pending",
        }),
      )
    },
    [description, dispatch, id, title],
  )

  return (
    <Card style={{ marginBottom: "2rem", width: "25rem" }}>
      <Card.Content
        header={
          <CardTitle
            titleVal={titleVal}
            setTitleVal={setTitleVal}
            isEditable={isEditable}
          />
        }
      />

      <Card.Content
        description={
          <CardDesc
            descVal={descVal}
            setDescVal={setDescVal}
            isEditable={isEditable}
          />
        }
      />

      <Card.Content extra>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Checkbox
            id={id}
            label='Complete'
            value={id}
            onChange={onStatusChange}
          />

          {!isEditable && (
            <Button icon onClick={() => setIsEditable(true)}>
              <Icon name='edit' />
            </Button>
          )}

          {isEditable && (
            <>
              <Button icon onClick={onSaveTask}>
                <Icon name='save' />
              </Button>

              <Button basic onClick={onCancel}>
                Cancel
              </Button>
            </>
          )}

          <Button icon onClick={onRemoveTask}>
            <Icon name='remove' />
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default Task

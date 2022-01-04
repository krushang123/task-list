import React from "react"
import { Grid, Ref } from "semantic-ui-react"
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd"

import { TaskType } from "../types"
import Task from "./task"

type TaskListProps = {
  tasks: TaskType[]
  listId: string
  listType: string
}

const TaskList = (props: TaskListProps) => {
  const { tasks, listId, listType } = props

  return (
    <Droppable droppableId={listId} type={listType} direction='horizontal'>
      {(droppableProvided: DroppableProvided) => (
        <Ref innerRef={droppableProvided.innerRef}>
          <Grid
            columns={3}
            style={{ width: "100%" }}
            {...droppableProvided.droppableProps}
          >
            <Grid.Row>
              {tasks.map((task, index) => (
                <Draggable draggableId={task.id} index={index} key={task.id}>
                  {(
                    draggableProvided: DraggableProvided,
                    draggableSnapshot: DraggableStateSnapshot,
                  ) => (
                    <Grid.Column
                      key={task.id}
                      style={{ marginBottom: "2rem", width: "25rem" }}
                    >
                      <Ref innerRef={draggableProvided.innerRef}>
                        <Task
                          title={task.title}
                          description={task.description}
                          id={task.id}
                          status={task.status}
                          snapshot={draggableSnapshot}
                          provided={draggableProvided}
                        />
                      </Ref>
                    </Grid.Column>
                  )}
                </Draggable>
              ))}
            </Grid.Row>
          </Grid>
        </Ref>
      )}
    </Droppable>
  )
}

export default TaskList

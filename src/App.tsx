import React from "react"
import { Container, Header } from "semantic-ui-react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"

import { useAppSelector } from "./app/hooks"
import { selectTasks } from "./components/tasksSlice"
import AddTask from "./components/add-task"
import TaskList from "./components/task-list"
import { TaskType } from "./types"
import { reorderTaskMap } from "./components/reorder"

const App = () => {
  const tasks: TaskType[] = useAppSelector(selectTasks)

  const alpha: string = "alpha"

  const initialTaskMap = {
    [alpha]: tasks,
  }

  const [taskMap, setTaskMap] = React.useState<any>(initialTaskMap)

  const numOfTasks: number = tasks.length
  const numOfCompletedTask: number = tasks.filter(
    (task) => task.status === "completed",
  ).length
  const numOfPendingTask: number = tasks.filter(
    (task) => task.status === "pending",
  ).length

  React.useEffect(() => {
    setTaskMap({
      [alpha]: tasks,
    })
  }, [tasks])

  const onDragEnd = React.useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return
      }

      const reorderTask = reorderTaskMap({
        taskMap,
        source: result.source,
        destination: result.destination,
      })

      setTaskMap(reorderTask.taskMap)
    },
    [taskMap],
  )

  return (
    <Container as='main' style={{ width: "100vw", minHeight: "100vh" }}>
      <Header
        as='h1'
        style={{
          fontSize: "34px",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        Task List
      </Header>

      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <p style={{ paddingInline: "10px", fontSize: "18px" }}>
          Total Tasks: {numOfTasks}
        </p>
        <p style={{ paddingInline: "10px", fontSize: "18px" }}>
          Tasks Completed: {numOfCompletedTask}
        </p>
        <p style={{ paddingInline: "10px", fontSize: "18px" }}>
          Tasks Pending: {numOfPendingTask}
        </p>
      </div>

      <Container
        as='section'
        style={{
          display: "flex",
          width: "1440px",
          margin: "4rem 0",
        }}
      >
        <AddTask />

        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(taskMap).map((key: string) => (
            <TaskList
              key={key}
              listId={key}
              listType='CARD'
              tasks={taskMap[key]}
            />
          ))}
        </DragDropContext>
      </Container>
    </Container>
  )
}

export default App

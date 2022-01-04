import React from "react"
import { Container, Header } from "semantic-ui-react"

import { useAppSelector } from "./app/hooks"
import { selectTasks } from "./components/tasksSlice"
import AddTask from "./components/add-task"
import TaskList from "./components/task-list"

const App = () => {
  const tasks = useAppSelector(selectTasks)

  const numOfTaks: number = tasks.length
  const numOfCompletedTask: number = tasks.filter(
    (task) => task.status === "completed",
  ).length
  const numOfPendingTask: number = tasks.filter(
    (task) => task.status === "pending",
  ).length

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
          Total Tasks: {numOfTaks}
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
        <TaskList />
      </Container>
    </Container>
  )
}

export default App

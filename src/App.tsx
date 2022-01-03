import React from "react"
import { Container, Header } from "semantic-ui-react"
import AddTask from "./components/add-task"
import TaskList from "./components/task-list"

const App = () => (
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
export default App

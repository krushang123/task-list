import { DraggableId, DraggableLocation } from "react-beautiful-dnd"

export type Id = string

export type TaskType = {
  id: Id
  title: string
  description: string
  status: "completed" | "pending"
}

export type TaskMap = {
  [key: string]: TaskType[]
}

export type Dragging = {
  id: DraggableId
  location: DraggableLocation
}

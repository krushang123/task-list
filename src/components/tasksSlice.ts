import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DropResult } from "react-beautiful-dnd"

import { RootState } from "../app/store"

type TaskState = {
  id: string
  title: string
  description: string
  status: "completed" | "pending"
}

const initialState = [] as TaskState[]

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskState>) => {
      state.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<TaskState>) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      state.splice(index, 1)
    },
    updateTask: (state, action: PayloadAction<TaskState>) => {
      const index = state.findIndex((task) => task.id === action.payload.id)

      // eslint-disable-next-line no-param-reassign
      state[index] = {
        ...state[index],
        ...action.payload,
      }
    },
    reorderTasks: (state, action: PayloadAction<DropResult>) => {
      const movedTask = state.filter(
        (task, index) => index === action.payload.source.index,
      )
      const remainingTasks = state.filter(
        (task, index) => index !== action.payload.source.index,
      )

      const reorderedTasks = [
        ...remainingTasks.slice(0, action.payload.destination?.index),
        movedTask[0],
        ...remainingTasks.slice(action.payload.destination?.index),
      ]

      return reorderedTasks
    },
  },
})

export const { createTask, removeTask, updateTask, reorderTasks } =
  tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks

export default tasksSlice.reducer

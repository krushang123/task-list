import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
  },
})

export const { createTask, removeTask, updateTask } = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks

export default tasksSlice.reducer

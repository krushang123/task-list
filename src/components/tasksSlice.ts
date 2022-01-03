import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "../app/store"

type TaskState = {
  id: string
  title: string
  description: string
  status: "complete" | "pending"
}

const initialState = [] as TaskState[]

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskState>) => {
      state.push(action.payload)
    },
  },
})

export const { createTask } = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks

export default tasksSlice.reducer

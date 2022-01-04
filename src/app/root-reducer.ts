import { combineReducers } from "redux"

import tasksReducer from "../components/tasksSlice"

export default combineReducers({
  tasks: tasksReducer,
})

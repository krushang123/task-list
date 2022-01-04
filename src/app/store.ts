import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import rootReducer from "./root-reducer"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store

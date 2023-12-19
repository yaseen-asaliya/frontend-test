import { configureStore } from '@reduxjs/toolkit'
import fieldsReducer from './reducers/FieldReducer'
import sidebarReducer from './reducers/SidebarReducer'

export const store = configureStore({
  reducer: {
    fields: fieldsReducer,
    open: sidebarReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
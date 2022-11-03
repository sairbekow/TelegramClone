import { configureStore, combineReducers } from '@reduxjs/toolkit'

import sideBarRoute from './slices/sideBarRoute'
import gramAuthState from "./slices/gramAuth"

const rootReducer = combineReducers({
  sideBarRoute,
  gramAuthState,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

export const store = makeStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']

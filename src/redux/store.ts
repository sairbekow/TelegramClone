import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";

import {contactsSlice} from "./slices/contacts";
import sideBarRoute from "./slices/sideBarRoute";


const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    sideBarRoute
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    });
};

export const store = makeStore();
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["dispatch"]

import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";

import {contactsSlice} from "./slices/contacts";


const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["dispatch"]

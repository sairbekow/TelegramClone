import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: false,
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        isContacts: (state) => {
            state.contacts = true;
        },
        noContacts: (state) => {
            state.contacts = false;
        },
    },
});

export const { isContacts, noContacts } = contactsSlice.actions;

export default contactsSlice.reducer;

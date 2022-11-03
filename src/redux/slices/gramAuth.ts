import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    state: string
    gramResult: any // any state can be here and even an error
}

interface InitialState {
    state: AuthState | null
}

interface Action {
    payload: InitialState
}

const initialState: InitialState = {
    state: null
}

const gramAuthState = createSlice({
    name: "gramAuthState",
    initialState,
    reducers: {
        changeAuthGramState: (state, action: Action) => {
            state = action.payload;
        }
    }
})

export default gramAuthState.reducer;
export const {changeAuthGramState} = gramAuthState.actions
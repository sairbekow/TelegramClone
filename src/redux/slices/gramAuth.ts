import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GramAuthState {
    state: string
    gramResult: any // any state can be here and even an error
}

interface InitialState {
    AuthState: GramAuthState | null
}

const initialState: InitialState = {
    AuthState: null
}

const gramAuthState = createSlice({
    name: "gramAuthState",
    initialState,
    reducers: {
        changeAuthGramState: (state, action: PayloadAction<GramAuthState>) => {
            state.AuthState = action.payload;
        }
    }
})

export default gramAuthState.reducer;
export const {changeAuthGramState} = gramAuthState.actions
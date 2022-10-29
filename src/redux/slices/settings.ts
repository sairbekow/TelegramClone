import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface SearchType {
  page: number
}

const initialState: SearchType = {
  page: -1,
};

export const settingsRoute = createSlice({
  name: "searchCoupons",
  initialState,
  reducers: {
    changeRoute(state, action: PayloadAction<number>){
      state.page = action.payload;
    }
  },
})

export default settingsRoute.reducer;
export const { changeRoute } = settingsRoute.actions;
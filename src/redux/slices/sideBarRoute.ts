import { ISideBarRoute, SidebarRoute, sideBarRoutes } from "@/utils/sideBarRoute";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import LeftColumn from "@/components/leftColumn";
import { Settings } from "@/components/Settings";

const initialState:ISideBarRoute[] = [{
  path:SidebarRoute.Root,
  component: Settings
}]


export const sideBarRoute = createSlice({
  name: "sideBarRoute",
  initialState,
  reducers: {
    changeSlide: (state, action: PayloadAction<string>)=>{
      const newRoute = sideBarRoutes.find(elem => elem.path===action.payload);
      newRoute && state.push(newRoute);
    },
    prevSlide: (state)=>{
      state.pop();
    }
  },
})

export default sideBarRoute.reducer;
export const { changeSlide, prevSlide } = sideBarRoute.actions;
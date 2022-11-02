import { ISideBarRoute, SidebarRoute, sideBarRoutes } from "@/utils/sideBarRoute";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import LeftRootBlock from "@/components/leftRootBlock/LeftRootBlock";

const initialState:ISideBarRoute[] = [{
  path:SidebarRoute.Root,
  component: LeftRootBlock
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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import React, { ReactNode } from "react";
import { GeneralSettings } from "./content/GeneralSettings";
import { CreateFolder } from "./content/CreateFolder";


export interface ISettings {
  title: string,
  icon?: ReactNode,
  component: ReactNode,
  isList: boolean,
}

export const settingsList: ISettings[] = [
  {
    title: "General Settings",
    icon: <SettingsOutlinedIcon color={"icons"} />,
    component: <GeneralSettings />,
    isList: true,
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveOutlinedIcon color={"icons"} />,
    isList: true,
    component: <GeneralSettings />
  },
  {
    title: "Privacy and Security",
    icon: <LockOutlinedIcon color={"icons"} />,
    isList: true,
    component: <GeneralSettings />
  },
  {
    title: "Chat Folders",
    icon: <FolderOutlinedIcon color={"icons"} />,
    isList: true,
    component: <CreateFolder />
  },
  {
    title: "Devices",
    icon: <DevicesOutlinedIcon color={"icons"} />,
    isList: true,
    component: <GeneralSettings />
  },
  {
    title: "Stickers and Emoji",
    icon: <SentimentSatisfiedAltOutlinedIcon color={"icons"} />,
    isList: true,
    component: <GeneralSettings />
  },
];

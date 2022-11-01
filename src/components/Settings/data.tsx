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
  path: string,
}

export const settingsList: ISettings[] = [
  {
    title: "General Settings",
    icon: <SettingsOutlinedIcon color={"icons"} />,
    path: "generalSetting"
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveOutlinedIcon color={"icons"} />,
    path: "notification"
  },
  {
    title: "Privacy and Security",
    icon: <LockOutlinedIcon color={"icons"} />,
    path: "generalSetting"
  },
  {
    title: "Chat Folders",
    icon: <FolderOutlinedIcon color={"icons"} />,
    path: "createFolder"
  },
  {
    title: "Devices",
    icon: <DevicesOutlinedIcon color={"icons"} />,
    path: "root"
  },
  {
    title: "Stickers and Emoji",
    icon: <SentimentSatisfiedAltOutlinedIcon color={"icons"} />,
    path: "root"
  },
];

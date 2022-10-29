import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { SettingsItem } from "./SettingsItem";
import { Box } from "@mui/material";
import theme from "@/styles/theme";

const settingsList = [
  {
    title: "General Settings",
    icon: <SettingsOutlinedIcon color={"icons"} />
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveOutlinedIcon color={"icons"}/>
  },
  {
    title: "Privacy and Security",
    icon: <LockOutlinedIcon color={"icons"}/>
  },
  {
    title: "Chat Folders",
    icon: <FolderOutlinedIcon color={"icons"}/>
  },
  {
    title: "Devices",
    icon: <DevicesOutlinedIcon color={"icons"}/>
  },
  {
    title: "Stickers and Emoji",
    icon: <SentimentSatisfiedAltOutlinedIcon color={"icons"}/>
  },
]
export const SettingsList = () => {
  return (
    <Box className={"mt-[10px] bg-white py-[10px] px-[5px] flex flex-col gap-[10px]"}>
      {
        settingsList.map((elem, index) => (
          <SettingsItem data={elem} key={index}/>
        ))
      }
    </Box>
  )
}
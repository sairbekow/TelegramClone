import { Box, Stack, Typography } from "@mui/material"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { ReactNode } from "react";

interface IInfoBlock {
  data: {
    title: string,
    icon: ReactNode
  }
}

export const SettingsItem = ({ data }: IInfoBlock) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      className={"hover:bg-gray-200 mt-[10px] cursor-pointer gap-[2rem] py-[10px] px-[1rem] rounded-[0.75rem]"}>
      {data.icon}
      <Box flexDirection={"column"}>
        <Typography paragraph={true} color={"base.dark"} className={"m-0 text-[16px] font-semibold"}>{data.title}</Typography>
      </Box>
    </Stack>
  )
}
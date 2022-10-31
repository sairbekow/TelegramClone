import { Box, Stack, Typography } from "@mui/material"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { ReactNode } from "react";

interface IInfoBlock {
  data: {
    name: string,
    title: string,
    icon: ReactNode
  }
}

export const InfoBlock = ({ data }: IInfoBlock) => {
  const copyText = () => {
    console.log("asd")
    document.execCommand(data.title);
  }
  return (
    <Stack
      onClick={copyText}
      direction={"row"}
      alignItems={"center"}
      className={"hover:bg-gray-200 cursor-pointer gap-[2rem] py-[0.5rem] px-[1rem] rounded-[0.75rem]"}>
      {data.icon}
      <Box flexDirection={"column"}>
        <Typography paragraph={true} color={"base.dark"} className={"m-0 text-[16px] font-semibold"}>{data.title}</Typography>
        <Typography paragraph={true} color={"base.dark"} className={"m-0 text-[.875rem]"}
          sx={{
            color: "rgb(112,117,121)"
          }}
        >{data.name}</Typography>
      </Box>
    </Stack>
  )
}
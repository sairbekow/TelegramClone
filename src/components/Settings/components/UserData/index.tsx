import { Box, Stack, Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { InfoBlock } from "./components/InfoBlock";
import React, { FC } from "react";


const userInfor = [
  {
    title: "+996 700 500200",
    name: "Phone",
    icon: <CallOutlinedIcon color={"icons"} />
  },
  {
    title: "Джай Джай Джай",
    name: "Username",
    icon: <AlternateEmailIcon color={"icons"} />
  }
];

export const UserData :FC = () => {
  return (
    <Box className={"bg-white"}>
      <Stack direction="column" position={"relative"}>
        <img
          className={"w-[100%] object-cover"}
          src={"https://avatanplus.com/files/photos/original/590ec8ec7139115be1c0dbb0.jpg"}
          alt={"img"}
        />
        <Box className={"w-[100%] absolute bottom-0 py-[12px] px-[24px] bg-bgLinearGrad"}
          sx={{
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);"
          }}
        >
          <Typography paragraph={true} color={"base.light"} className={"m-0 font-medium text-[1.25rem]"}>Джай Джай Джай</Typography>
          <Typography paragraph={true} color={"base.light"} className={"m-0 text-[.825rem] opacity-50"}>last seen 7 minutes ago</Typography>
        </Box>
      </Stack>
      <Box className="py-[10px] px-[5px] flex flex-col gap-[10px]">
        {
          userInfor.map((elem, index) => (
            <InfoBlock data={elem} key={index} />
          ))
        }
      </Box>
    </Box>
  );
};
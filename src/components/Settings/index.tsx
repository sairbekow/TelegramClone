import React, { FC } from "react";
import { Box } from "@mui/material";
import { SettingsHead } from "./components/Header";
import { SettingsList } from "./components/SettingsList";
import { UserData } from "./components/UserData";


export const Settings: FC = () => {
  return (
    <Box sx={{
      background: "#f4f4f5",
    }}>
      <SettingsHead />
      <UserData />
      <SettingsList />
    </Box>
  );
};
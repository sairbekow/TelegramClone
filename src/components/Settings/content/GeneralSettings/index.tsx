import { Box, Button, Typography } from "@mui/material"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { SettingsItem } from "../../components/SettingsList/SettingsItem";
import { EditProfile } from "../EditProfile";
import { ChangeTheme } from "./components/ChangeTheme";
import styled from "styled-components";
import theme from "@/styles/theme";
import { ContentHead } from "../ContentHead/index";

const generalSettingsData = [
  {
    title: "Chat Background",
    icon: <ImageOutlinedIcon color={"icons"} />,
    path: "root",
  }
]

const SettingsTitle = styled.h4`
  padding: .5rem 0px;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: ${props=> props.theme.palette.icons.main}
`

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0.5rem;
  background: ${props=> props.theme.palette.base.light};
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: overlay;
`

export const GeneralSettings = () => {
  return (
    <>
      <ContentHead title={"General Settings"}/>
      <Wrapper>
        <SettingsTitle>Settings</SettingsTitle>
        <div>
          <SettingsItem data={generalSettingsData[0]} />
        </div>
        <SettingsTitle>Theme</SettingsTitle>
        <ChangeTheme/>
      </Wrapper>
    </>
  )
}
import { Box, Button, Typography } from "@mui/material"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { SettingsItem } from "../../components/SettingsList/SettingsItem";
import { EditProfile } from "../EditProfile";
import { ChangeTheme } from "./components/ChangeTheme";
import styled from "styled-components";
import theme from "@/styles/theme";

const generalSettingsData = [
  {
    title: "Chat Background",
    icon: <ImageOutlinedIcon color={"icons"} />,
    component: <EditProfile/>,
    isList: true,
  }
]

const SettingsTitle = styled.h4`
  padding: .5rem 0px;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: ${theme.palette.icons.main}
`

const Wrapper = styled.div`
  margin-top: 56px;
`
const WrapperInner = styled.div`
  padding: 1.5rem 0.5rem;
  background: ${theme.palette.base.light}
`

export const GeneralSettings = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <SettingsTitle>Settings</SettingsTitle>
        <div>
          <SettingsItem data={generalSettingsData[0]} />
        </div>
        <SettingsTitle>Theme</SettingsTitle>
        <ChangeTheme/>
      </WrapperInner>
    </Wrapper>
  )
}
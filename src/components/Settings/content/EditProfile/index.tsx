import React, { FC } from "react";
import { TextField, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import styled from "styled-components";
import theme from "@/styles/theme";
import { ContentHead } from "../ContentHead";

const Wrapper = styled.div`
  margin-top: 56px;
  width: 100%;
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: overlay;
`
const WrapperInner = styled.div`
  padding-top: 10px;
  background: ${props=>props.theme.palette.base.light};
`

const ChangeAvatar = styled.div`
  position: relative;
  margin: 15px auto;
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props=>props.theme.palette.primary.light};
  color: ${props=>props.theme.palette.base.light}
`

const ChangeAvatarInput = styled.input`
  width: 100%;
  height:100%;
  position: absolute;
  opacity: 0;
`
const ChangeUserData = styled.div`
  padding: 0px 1.5rem;
  display:flex;
  flex-direction: column;
  gap: 20px;
`

const InformText = styled.p`
  font-size: .875rem;
  color: ${props=>props.theme.palette.icons.main};
  & span{
    font-weight: 600;
  }
`

const ChangeUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;  
  padding: 1.5rem;
  margin-top: 15px;
  background: ${props=>props.theme.palette.base.light};
`
const ChangeUserNameTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${props=>props.theme.palette.icons.main}
`

const ChangeUserDataInput = styled(TextField)`
  width: 100%;
`
export const EditProfile = () => {
  return (
    <>
      <ContentHead title={"Edit Profile"}/>
      <Wrapper>
        <WrapperInner>
          <ChangeAvatar>
            <ChangeAvatarInput type="file" />
            <AddAPhotoOutlinedIcon sx={{ fontSize: 50 }} />
          </ChangeAvatar>
          <ChangeUserData className={"px-[1.5rem] flex flex-col gap-[20px]"}>
            <ChangeUserDataInput id="outlined-basic" label="First name(required)" variant="outlined" />
            <ChangeUserDataInput id="outlined-basic" label="Last name(required)" variant="outlined" />
            <ChangeUserDataInput id="outlined-basic" label="Bio" variant="outlined" />
            <InformText>Any details such as age, occupation or city.
              Example: 23 y.o. designer from San Francisco</InformText>
          </ChangeUserData>
        </WrapperInner>
        <ChangeUserName>
          <ChangeUserNameTitle>Username</ChangeUserNameTitle>
          <ChangeUserDataInput id="outlined-basic" label="Username" variant="outlined" />
          <InformText>
            You can choose a username on <span>Telegram</span>. If you do, people will be able to find you by this username and contact you without needing your phone number.
          </InformText>
          <InformText>You can use <span>a–z, 0–9</span> and underscores. Minimum length is 5 characters.
          </InformText>
          <InformText>This link opens a chat with you:<br></br>
            <Typography color={"primary.light"} variant={"subtitle2"}>https://t.me/JoldoshovBakai</Typography>
          </InformText>
        </ChangeUserName>
      </Wrapper>
    </>
  )
}


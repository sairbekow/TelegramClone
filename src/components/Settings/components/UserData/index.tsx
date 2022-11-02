import { Box, Stack, Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { InfoBlock } from "./components/InfoBlock";
import React, { FC } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";


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

const Wrapper = styled.div`
  background: ${theme.palette.base.light};
`
const UserDataWrapper = styled.div`
  width: 100%;
  position:absolute;
  bottom: 0px;
  padding: 12px 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
`
const UserName = styled.p`
  margin: 0px;
  color: #FFF;
  font-weight: 500;
  font-size: 1.25rem;
`
const UserSeen = styled.p`
  margin: 0px;
  font-size: .825rem;
  opacity: .5;
  color: #FFF;
`

const UserAvatar = styled.img`
  width: 100%;
  object-fit: cover;
`

const WrapperContact = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
`

export const UserData: FC = () => {
  return (
    <Wrapper className={"bg-white mt-[56px]"}>
      <Stack direction="column" position={"relative"}>
        <UserAvatar
          src={"https://avatanplus.com/files/photos/original/590ec8ec7139115be1c0dbb0.jpg"}
          alt={"img"}
        />
        <UserDataWrapper>
          <UserName>Джай Джай Джай</UserName>
          <UserSeen>last seen 7 minutes ago</UserSeen>
        </UserDataWrapper>
      </Stack>
      <WrapperContact>
        {
          userInfor.map((elem, index) => (
            <InfoBlock data={elem} key={index} />
          ))
        }
      </WrapperContact>
    </Wrapper>
  );
};
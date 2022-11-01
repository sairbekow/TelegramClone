import React, { FC, useState } from "react";
import { SettingsHead } from "./components/Header";
import { SettingsList } from "./components/SettingsList";
import { UserData } from "./components/UserData";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: #f4f4f5;
`
const WrapperInner = styled.div`
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: overlay;
`
export const Settings: FC = () => {
  const [activeSetting, setActiveSetting] = useState(-1);
  return (
    <Wrapper>
      <SettingsHead setActiveSetting={setActiveSetting} />
      <WrapperInner>
        <UserData />
        <SettingsList setActiveSetting={setActiveSetting} activeSetting={activeSetting} />
      </WrapperInner>
    </Wrapper >
  );
};
import { SettingsItem } from "./SettingsItem";
import React from "react";
import { ISettings, settingsList } from "../../data";
import styled from "styled-components";

interface ISettingsList {
  activeSetting: number | null
  setActiveSetting: (value: number) => void
}

const Wrapper = styled.div`
  margin-top: 10px;
  background: #FFF;
  padding: 10px 5px;
  display:flex;
  flex-direction: column;
  gap: 10px;
`

export const SettingsList = ({ activeSetting, setActiveSetting }: ISettingsList) => {
  return (
    <Wrapper>
      {
        settingsList.map((elem: ISettings, index: number) => {
          if (elem.isList) return (
            <div key={index} onClick={() => setActiveSetting(index)}>
              <SettingsItem data={elem} />
            </div>
          )
        })
      }
    </Wrapper>
  )
}
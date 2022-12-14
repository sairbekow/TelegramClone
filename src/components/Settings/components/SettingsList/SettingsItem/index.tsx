import { Box, Stack, Typography } from "@mui/material"
import { ISettings } from "@/components/Settings/data";
import styled from "styled-components";
import theme from "@/styles/theme";
import { useAppDispatch } from "../../../../../hooks/redux";
import { changeSlide } from "@/redux/slices/sideBarRoute";
interface IInfoBlock {
  data: ISettings
}

const Wrapper = styled.div`
  display: flex;
  align-items:center;
  margin-top:10px;
  cursor: pointer;
  gap: 2rem;
  padding: 10px 1rem; 
  border-radius: 0.75rem;
  &:hover{
    background: #f4f4f5
  }
`

const Paragraph = styled.p`
  margin: 0px;
  font-weight: 500;
  color: ${theme.palette.base.dark}
`

export const SettingsItem = ({ data }: IInfoBlock) => {
  const dispatch = useAppDispatch();
  const changeLeftSlide = () => {
    dispatch(changeSlide(data.path));
  }
  return (
    <Wrapper onClick={changeLeftSlide}>
      {data.icon}
      <Box flexDirection={"column"}>
        <Paragraph>{data.title}</Paragraph>
      </Box>
    </Wrapper >
  )
}
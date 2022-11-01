import { AppBar, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC, useState } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";
import { useAppDispatch } from "../../../../hooks/redux";
import {prevSlide } from "@/redux/slices/sideBarRoute";

interface IContentHead {
  title: string
  setActiveSetting: (value: number) => void
}

const HeaderWrapper = styled(AppBar)`
  position: fixed;
  padding: 8px;
  background: ${theme.palette.base.light};
`

export const ContentHead: FC<IContentHead> = ({ title, setActiveSetting }) => {
  const dispatch = useAppDispatch();
  const goPrevSlide = () => {
    dispatch(prevSlide());
  }
  return (
    <HeaderWrapper>
      <Stack spacing="8px" direction="row" alignItems="center">
        <IconButton onClick={goPrevSlide}>
          <ArrowBackIcon color={"icons"} />
        </IconButton>
        <Typography variant="h5" className={"text-[1.25rem] font-medium"} color={"secondary.contrastText"}>{title}</Typography>
      </Stack>
    </HeaderWrapper>
  )
}

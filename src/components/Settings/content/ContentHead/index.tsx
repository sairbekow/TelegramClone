import { AppBar, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../hooks/redux";
import { prevSlide } from "@/redux/slices/sideBarRoute";

interface IContentHead {
  title: string
}

const HeaderWrapper = styled.header`
  padding: 8px;
  width: inherit;
  background: ${props => props.theme.palette.base.light};
  border-bottom: 1px solid rgb(218,220,224);
`

export const ContentHead: FC<IContentHead> = ({ title }) => {
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

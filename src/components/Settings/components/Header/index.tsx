import { AppBar, Button, IconButton, Popover, Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import { FC, MouseEvent, useState } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";
import { useAppDispatch } from "@/hooks/redux";
import { prevSlide } from "@/redux/slices/sideBarRoute";


interface ISettingsHead {
  setActiveSetting: (value: number) => void;
}

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 15px;
  background: #ffffffbb;
  border: 0px;
  border-radius: 0.75rem;
  min-width: 13.5rem;
  box-shadow: 0 0.25rem 0.5rem 0.125rem var(--color-default-shadow);
  justify-content: start; 
`

const HeadTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${theme.palette.secondary.contrastText};
`

const Header = styled.header`
  padding: 8px;
  background: ${theme.palette.base.light};
  max-width: inherit;
`

export const SettingsHead: FC<ISettingsHead> = ({ setActiveSetting }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changePrevSlide = () => {
    dispatch(prevSlide());
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Header>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing="8px" direction="row" alignItems="center">
          <IconButton onClick={changePrevSlide}>
            <ArrowBackIcon color={"icons"} />
          </IconButton>
          <HeadTitle>Settings</HeadTitle>
        </Stack>
        <Stack spacing="8px" direction="row" alignItems="center">
          <IconButton onClick={() => setActiveSetting(0)}>
            <CreateOutlinedIcon color={"icons"} />
          </IconButton>
          <IconButton aria-describedby={id} onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          top: 10
        }}
      >
        <LogoutButton>
          <LogoutIcon color={'error'}
            sx={{ marginRight: 1 }} />
          <span style={{ color: theme.palette.error.main }}>Log Out</span>
        </LogoutButton>
      </Popover>
    </Header>
  )
}

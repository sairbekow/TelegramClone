import { AppBar, Button, IconButton, Popover, Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import theme from "@/styles/theme";
import { FC, MouseEvent, useState } from "react";

export const SettingsHead: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <AppBar position="fixed" className={"p-[8px]"}  sx={{ bgcolor: "base.light" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack spacing="8px" direction="row" alignItems="center">
            <IconButton>
              <ArrowBackIcon color={"icons"} />
            </IconButton>
            <Typography variant="h5" className={"text-[1.25rem] font-medium"} color={"secondary.contrastText"}>Settings</Typography>
          </Stack>
          <Stack spacing="8px" direction="row" alignItems="center">
            <IconButton>
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
          <Button sx={{ 
              p: "12px 14px", 
              width: "100%",
              backdropFilter: "blur(10px)", 
              background: "rgba(255,255,255,0.733333)", 
              justifyContent: 'start',
              boxShadow: "0 0.25rem 0.5rem 0.125rem var(--color-default-shadow)",
              }}
              >
            <LogoutIcon color={'error'}
              sx={{ marginRight: 1 }} />
            <span style={{ color: theme.palette.error.main }}>Log Out</span>
          </Button>
        </Popover>
      </AppBar>
    </>
  )
}

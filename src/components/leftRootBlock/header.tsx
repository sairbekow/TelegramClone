import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Popover } from "@mui/material";
import { useState, MouseEvent } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { StyledInputBase, Wrapper } from "./headerStyle";
import { useAppDispatch } from "@/hooks/redux";
import { changeSlide } from "@/redux/slices/sideBarRoute";

// import { useDispatch } from "react-redux";
// import { isContacts, noContacts } from "@/redux/slices/contacts";
const Header = () => {
    const [burger, setBurger] = useState(true);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const arr = [
        {
            icon: <BookmarkBorderIcon sx={{ color: "#707579" }} />,
            title: "Saved Messages",
        },
        {
            icon: <ArchiveOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Archived Chats",
        },
        {
            icon: <PersonOutlineOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Contacts",
        },
        {
            icon: <SettingsOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Settings",
            path: "settings"
        },
        {
            icon: <ModeNightOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Night Mode",
        },
        {
            icon: <HelpOutlineOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Telegram Features ",
        },
        {
            icon: <BugReportOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Report Bug ",
        },
        {
            icon: <AddCircleOutlineOutlinedIcon sx={{ color: "#707579" }} />,
            title: "Install App ",
        },
    ];

    const dispatch = useAppDispatch();
    const onChangeLeftSlide = (path:string)=>{
        dispatch(changeSlide(path))
    }
    return (
        <Wrapper >
            <IconButton
                aria-label="delete"
                aria-describedby={id}
                onClick={handleClick}
                sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                }}
            >
                <MenuIcon />
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                sx={{ top: 10, width: "240px" }}
            >
                {arr.map((item, index) => (
                    <Button
                        key={index}
                        sx={{
                            p: "12px 14px",
                            width: "100%",
                            justifyContent: "start",
                            gap: "10px",
                        }}
                        onClick={()=>onChangeLeftSlide(item.path || "root")}
                    >
                        {item.icon}
                        <span style={{ color: "black" }}>{item.title}</span>
                    </Button>
                ))}
            </Popover>

            <form
                className="header__input"
                style={{
                    padding: "7px 15px 7px 10px",
                    gap: "10px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    borderRadius: "1.375rem",
                    width: "100%",
                    backgroundColor: "#f4f4f5",
                    border: "2px solid #f4f4f5",
                }}
            >
                <SearchIcon
                    sx={{
                        width: "20px",
                        height: "20px",
                        fill: "rgb(112,117,121)",
                    }}
                />
                <StyledInputBase
                    type="search"
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                />
            </form>
        </Wrapper>
    );
};

export default Header;


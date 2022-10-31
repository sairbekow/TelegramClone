import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

type Props = {};
const StyledInputBase = styled(InputBase)(() => ({
    width: "100%",
    outline: "none",
    background: "#f4f4f5",
    color: "black",
    border: "none",
    lineHeight: "1.25rem",
    cursor: "pointer",
    fontSize: "1rem",
    "& .MuiInputBase-input": {
        padding: "0px",
    },
}));

export default function Header({}: Props) {
    return (
        <div className="w-full mb-8">
            <div className="flex justify-between items-center w-full p-3 ">
                <ArrowBackIcon sx={{ fontSize: 30 }} />
                <form
                    className="header__input ml-3 flex items-center justify-start gap-3 pl-4 pr-2 py-1.5 rounded-3xl w-full"
                    style={{
                        // maxWidth: "400px",
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
                        placeholder="Search contacts…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </form>
            </div>
        </div>
    );
}

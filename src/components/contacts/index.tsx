import React from "react";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import Header from "./header";
import Contact from "./contact";

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

export default function Contacts({}: Props) {
    return (
        <div className="overflow-x-auto overflow-y-hidden max-w-lg min-w-0">
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    );
}

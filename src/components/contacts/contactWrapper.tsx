import React from "react";
import Contact from "./contact";

import styled from "styled-components";
import theme from "@/styles/theme";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

type Props = {};

const ContactBox = styled.div`
    position: relative;
    padding: 5px 10px;
`;
const AddUser = styled.div`
    position: absolute;
    top: 500px;
    right: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
`;

function ContactWrapper({}: Props) {
    return (
        <ContactBox>
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
            <AddUser>
                <PersonAddIcon style={{ color: "white" }} fontSize="medium" />
            </AddUser>
        </ContactBox>
    );
}

export default ContactWrapper;

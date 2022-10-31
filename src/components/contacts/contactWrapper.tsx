import React, { useState } from "react";
import Contact from "./contact";

import styled from "styled-components";
import theme from "@/styles/theme";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddNewContact from "./addNewContact";
import { ModalWrapper } from "../createModals/wrapper";

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
    const [isOpenModal, setIsOpenModal] = useState(false);

    function openWindow() {
        setIsOpenModal(true);
    }
    return (
        <>
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
                    <PersonAddIcon
                        style={{ color: "white" }}
                        fontSize="medium"
                        onClick={openWindow}
                    />
                </AddUser>
            </ContactBox>
            <ModalWrapper open={isOpenModal} setOpen={setIsOpenModal}>
                <AddNewContact />
            </ModalWrapper>
        </>
    );
}

export default ContactWrapper;

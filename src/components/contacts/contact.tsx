import React from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

type Props = {};

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    font-family: ${theme.typography.fontFamily};

    &:hover {
        background-color: #c4c9cc;
    }
`;

const ContactImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`;

const UserName = styled.p`
    font-weight: 600;
`;

const UserStatus = styled.p`
    font-weight: 400;
    color: ${theme.palette.icons.main};
`;
export default function Contact({}: Props) {
    return (
        <ContactWrapper>
            <ContactImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&usqp=CAU"
                alt=""
            />
            <div>
                <UserName>Арген Саирбеков</UserName>
                <UserStatus>онлайн</UserStatus>
            </div>
        </ContactWrapper>
    );
}

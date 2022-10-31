import React from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

type Props = {};

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    width: 100%;
    cursor: pointer;
    border-radius: 15px;

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
    font-weight: 600;
`;
export default function Contact({}: Props) {
    return (
        <ContactWrapper>
            <ContactImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&usqp=CAU"
                alt=""
                className="w-14 h-14 object-cover rounded-full"
            />
            <div className="">
                <UserName>Арген Саирбеков</UserName>
                <p className="text-sm">онлайн</p>
            </div>
        </ContactWrapper>
    );
}

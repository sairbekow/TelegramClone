import theme from "@/styles/theme";
import { Button, DialogActions, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const Box = styled.div`
    /* width: 500px; */
`;

const Title = styled.h3`
    margin-bottom: 10px;
`;

const ContactBox = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 10px;
    padding: 20px;
`;
const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const RightBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* margin-top: 30px; */
`;

const ContactAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${theme.palette.primary.dark};
`;
const AvatarText = styled.h2`
    color: ${theme.palette.base.main};
    font-size: 25px;
    text-transform: uppercase;
`;
function AddNewContact({}: Props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    function getName(e) {
        setName(e.target.value);
    }
    function getSurname(e) {
        setSurname(e.target.value);
    }
    console.log(name[0], surname[0]);

    return (
        <Box>
            <Title>Новый контакт</Title>
            <ContactBox>
                <LeftBlock>
                    <ContactAvatar>
                        <AvatarText>{name[0]}</AvatarText>
                        <AvatarText>{surname[0]}</AvatarText>
                    </ContactAvatar>
                </LeftBlock>
                <RightBlock>
                    <TextField
                        prefix={"+"}
                        // format={format || null}
                        type="text"
                        // thousandSeparator={thousandSeparator ? " " : null}
                        id="outlined-basic"
                        label="Номер телефона"
                        variant="outlined"
                        autoFocus
                    />
                    <TextField
                        id="outlined-basic"
                        label="Имя (обязательно)"
                        variant="outlined"
                        onChange={(e) => getName(e)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Фамилия (необязательно)"
                        variant="outlined"
                        onChange={(e) => getSurname(e)}
                    />
                    <DialogActions>
                        <Button>Отмена</Button>
                        <Button autoFocus>Готово</Button>
                    </DialogActions>
                </RightBlock>
            </ContactBox>
        </Box>
    );
}

export default AddNewContact;

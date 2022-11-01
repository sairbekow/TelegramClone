import styled from 'styled-components'
import AuthByQR from "./authByQR";
import AuthByPhone from "./authByPhone";
import { useState } from "react";

const MyButton = styled.button`
    border: none;
    font-size: 16px;
    padding: 17px;
    text-transform: uppercase;
    width: 330px;
    color: ${(props) => props.theme.palette.primary.light};
    background-color: transparent;
    cursor: pointer;
    margin-top: 16px;
    font-weight: 500;

    &:hover {
        background-color: rgba(74, 149, 214, 0.08);
        border-radius: 10px;
    }
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

function Auth() {
    const [isLogInByPhone, setIsLogInByPhone] = useState(false);
    return (
        <Main>
            {isLogInByPhone ? <AuthByPhone /> : <AuthByQR />}

            <MyButton
                onClick={() => setIsLogInByPhone((prev) => !prev)}
            >
                {isLogInByPhone ? (
                    <p>Вход по QR-коду </p>
                ) : (
                    <p>Вход по номеру телефона</p>
                )}
            </MyButton>
        </Main>
    );
}

export default Auth;

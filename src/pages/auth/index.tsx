import styled from "@emotion/styled";
import theme from "@/styles/theme";
import AuthByQR from "./authByQR";
import AuthByPhone from "./authByPhone";
import { useState } from "react";

const Button = styled.button`
    border: none;
    font-size: 16px;
    padding: 17px;
    text-transform: uppercase;
    width: 330px;
    color: ${theme.palette.primary.light};
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: rgba(74, 149, 214, 0.08);
        border-radius: 10px;
    }
`;

function Auth() {
    const [isLogInByPhone, setIsLogInByPhone] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {isLogInByPhone ? <AuthByPhone /> : <AuthByQR />}

            <Button
                onClick={() => setIsLogInByPhone((prev) => !prev)}
                className="mt-4 font-medium"
            >
                {isLogInByPhone ? (
                    <p>Вход по QR-коду </p>
                ) : (
                    <p>Вход по номеру телефона</p>
                )}
            </Button>
        </div>
    );
}

export default Auth;

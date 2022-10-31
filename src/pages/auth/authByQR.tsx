import styled from "styled-components";
import theme from "@/styles/theme";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    font-weight: 600;
`;

const ImageWrapper = styled.div`
    width: 320px;
`;

const TextWrapper = styled.div`
    width: 24rem;
`;

const TextTitle = styled.h1`
    text-align: center;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 500;
`;

const Image = styled.img`
    width: 100%;
`;

const Ul = styled.ul`
    font-size: 16px;
    list-style: none;
    padding-top: 15px;
    counter-reset: numbers;
    margin-left: 20px;
`;

const Li = styled.li`
    position: relative;
    padding-bottom: 10px;
    padding-left: 30px;

    &:before {
        position: absolute;
        left: 0;
        padding-left: 0px;
        counter-increment: numbers;
        content: counter(numbers);
        background-color: ${theme.palette.primary.light};
        color: #fff;
        border-radius: 50%;
        padding: 2px 8px;
        font-size: 12px;
    }
`;

function AuthByQR() {
    return (
        <Box>
            <ImageWrapper>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/250px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt=""
                    className="w-full"
                />
            </ImageWrapper>

            <TextWrapper>
                <TextTitle>Быстрый вход по QR-коду</TextTitle>
                <Ul>
                    <Li>Откройте Telegram с телефона</Li>
                    <Li>
                        Перейдите в
                        <b> Настройки → Устройства → Подключить устройство</b>
                    </Li>
                    <Li>
                        Для подтверждения направьте камеру телефона на этот
                        экран.
                    </Li>
                </Ul>
            </TextWrapper>
        </Box>
    );
}

export default AuthByQR;

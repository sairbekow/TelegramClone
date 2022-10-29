import backgroundImage from '@/assets/images/bg-chatroom-light.png'
import backgroundColoredImage from "@/assets/images/bg-chatroom-colored.png";
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

const Main = styled(Box)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(${backgroundColoredImage});
        background-size: cover;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(${backgroundImage});
        background-size: 50%;
    }
`

const ChatroomBackground = () => {

    return (
        <Main />
    );
};

export default ChatroomBackground;
